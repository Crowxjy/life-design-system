import React, { useMemo, useState } from 'react';
import { clsx } from 'clsx';
import { useFormItemStatus } from '../Form/Form';
import { Icon } from '../Icon/Icon';
import { Popover } from '../Popover/Popover';

export type SelectSize = 'large' | 'default-size' | 'small';

export interface SelectOption {
  label: React.ReactNode;
  value: string;
  iconName?: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'children' | 'defaultValue' | 'onChange' | 'prefix' | 'size' | 'value'
  > {
  size?: SelectSize;
  placeholder?: React.ReactNode;
  prefix?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  width?: number | string;
  value?: string;
  defaultValue?: string;
  options: SelectOption[];
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onChange?: (value: string, option: SelectOption) => void;
  matchTriggerWidth?: boolean;
  panelWidth?: number | string;
  isFocused?: boolean;
  error?: boolean;
}

const toCssSize = (value?: number | string) => {
  if (value === undefined) return undefined;
  return typeof value === 'number' ? `${value}px` : value;
};

const useControllableState = <T,>({
  value,
  defaultValue,
  onChange,
}: {
  value: T | undefined;
  defaultValue: T;
  onChange?: (nextValue: T) => void;
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const stateValue = isControlled ? value : internalValue;

  const setValue = (nextValue: T) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
  };

  return [stateValue, setValue] as const;
};

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      className,
      style,
      size = 'default-size',
      placeholder = '请选择',
      prefix,
      prefixIcon,
      width = 360,
      value,
      defaultValue,
      options,
      open,
      defaultOpen = false,
      onOpenChange,
      onChange,
      matchTriggerWidth = true,
      panelWidth,
      isFocused = false,
      error,
      disabled = false,
      type,
      ...props
    },
    ref
  ) => {
    const { hasError } = useFormItemStatus();
    const mergedError = error ?? hasError;
    const [selectedValue, setSelectedValue] = useControllableState<string | undefined>({
      value,
      defaultValue,
      onChange: undefined,
    });
    const [isOpen, setIsOpen] = useControllableState<boolean>({
      value: open,
      defaultValue: defaultOpen,
      onChange: onOpenChange,
    });

    const selectedOption = useMemo(
      () => options.find((option) => option.value === selectedValue),
      [options, selectedValue]
    );

    const hasPrefix = prefix !== undefined || prefixIcon !== undefined;
    const resolvedWidth = toCssSize(width);
    const mergedStyle = {
      width: '100%',
      ...style,
    } as React.CSSProperties;
    const anchorStyle = {
      width: resolvedWidth,
      maxWidth: '100%',
      display: 'flex',
    } as React.CSSProperties;

    const trigger = (
      <button
        {...props}
        ref={ref}
        type={type ?? 'button'}
        disabled={disabled}
        aria-invalid={mergedError || undefined}
        className={clsx(
          'lds-select',
          `lds-select--${size}`,
          {
            'has-prefix': hasPrefix,
            'is-active': isFocused || isOpen,
            'is-disabled': disabled,
            'is-error': mergedError,
            'is-filled': selectedOption !== undefined,
          },
          className
        )}
        style={mergedStyle}
      >
        {hasPrefix ? (
          <>
            <span className="lds-select__prefix-group">
              <span className="lds-select__prefix">
                {prefixIcon ? (
                  <span className="lds-select__prefix-icon" aria-hidden="true">
                    {prefixIcon}
                  </span>
                ) : null}
                {prefix}
              </span>
            </span>
            <span className="lds-select__divider" aria-hidden="true" />
          </>
        ) : null}

        <span className="lds-select__value">
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <span className="lds-select__icon" aria-hidden="true">
          <Icon
            name={isOpen ? 'ic-arrow-up-line' : 'ic-arrow-down-line'}
            className="lds-select__icon-svg"
          />
        </span>
      </button>
    );

    return (
      <Popover
        trigger={trigger}
        open={isOpen}
        onOpenChange={setIsOpen}
        style={anchorStyle}
        matchTriggerWidth={matchTriggerWidth}
        closeOnClickOutside
        closeOnEsc
        contentRole="listbox"
        contentClassName="lds-filter-select__popover lds-select__popover"
        contentStyle={panelWidth !== undefined ? { width: toCssSize(panelWidth) } : undefined}
      >
        <div className="lds-filter-select__list">
          {options.map((option) => {
            const selected = option.value === selectedValue;

            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={selected}
                disabled={option.disabled}
                className={clsx('lds-filter-select__option', {
                  'is-selected': selected,
                })}
                onClick={() => {
                  if (option.disabled) return;
                  setSelectedValue(option.value);
                  onChange?.(option.value, option);
                  setIsOpen(false);
                }}
              >
                {option.iconName ? (
                  <span className="lds-filter-select__option-icon" aria-hidden="true">
                    <Icon name={option.iconName} />
                  </span>
                ) : null}
                <span className="lds-filter-select__option-label">{option.label}</span>
                {selected ? (
                  <span className="lds-filter-select__option-check" aria-hidden="true">
                    <Icon name="ic-finish-line" />
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </Popover>
    );
  }
);

Select.displayName = 'Select';
