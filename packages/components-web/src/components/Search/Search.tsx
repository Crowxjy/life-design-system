import React from 'react';
import { clsx } from 'clsx';
import { Icon } from '../Icon/Icon';

export interface SearchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'prefix'> {
  size?: 'large' | 'default-size' | 'small';
  wrapperClassName?: string;
  isFocused?: boolean;
  clearable?: boolean;
  onClear?: () => void;
}

function getTextLength(value: SearchProps['value'] | SearchProps['defaultValue']) {
  if (typeof value === 'string') return value.length;
  if (typeof value === 'number') return String(value).length;
  return 0;
}

export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      className,
      wrapperClassName,
      size = 'default-size',
      isFocused = false,
      clearable = true,
      disabled = false,
      value,
      defaultValue,
      onClear,
      onChange,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const isControlled = value !== undefined;
    const [innerValueLength, setInnerValueLength] = React.useState(() => getTextLength(defaultValue));
    const hasValue = (isControlled ? getTextLength(value) : innerValueLength) > 0;

    const setRefs = React.useCallback(
      (node: HTMLInputElement | null) => {
        inputRef.current = node;

        if (typeof ref === 'function') {
          ref(node);
          return;
        }

        if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!isControlled) {
          setInnerValueLength(event.target.value.length);
        }

        onChange?.(event);
      },
      [isControlled, onChange]
    );

    return (
      <div
        className={clsx(
          'lds-search',
          `lds-search--${size}`,
          {
            'is-focused': isFocused,
            'is-disabled': disabled,
            'is-filled': hasValue,
          },
          wrapperClassName
        )}
      >
        <span className="lds-search__prefix" aria-hidden="true">
          <Icon name="ic-search-line" />
        </span>

        <input
          {...props}
          ref={setRefs}
          type="search"
          className={clsx('lds-search__input', className)}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
        />

        {clearable && hasValue ? (
          <button
            type="button"
            className="lds-search__clear"
            aria-label="清空搜索"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              if (disabled) return;
              if (!isControlled) {
                if (inputRef.current) {
                  inputRef.current.value = '';
                }
                setInnerValueLength(0);
              }
              onClear?.();
            }}
          >
            <Icon name="ic-error-round-fill" />
          </button>
        ) : null}
      </div>
    );
  }
);

Search.displayName = 'Search';
