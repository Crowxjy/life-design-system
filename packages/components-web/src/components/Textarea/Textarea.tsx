import React from 'react';
import { clsx } from 'clsx';
import { useFormItemStatus } from '../Form/Form';

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  size?: 'large' | 'default-size';
  wrapperClassName?: string;
  isFocused?: boolean;
  error?: boolean;
  showCount?: boolean;
  showResizeHandle?: boolean;
}

function getTextLength(value: TextareaProps['value'] | TextareaProps['defaultValue']) {
  if (typeof value === 'string') {
    return value.length;
  }

  if (typeof value === 'number') {
    return String(value).length;
  }

  return 0;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      wrapperClassName,
      size = 'default-size',
      isFocused = false,
      error,
      disabled = false,
      showCount = true,
      showResizeHandle = true,
      value,
      defaultValue,
      maxLength,
      onChange,
      ...props
    },
    ref
  ) => {
    const { hasError } = useFormItemStatus();
    const isControlled = value !== undefined;
    const [innerValueLength, setInnerValueLength] = React.useState(() => getTextLength(defaultValue));
    const mergedError = error ?? hasError;

    const currentLength = isControlled ? getTextLength(value) : innerValueLength;

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (!isControlled) {
          setInnerValueLength(event.target.value.length);
        }

        onChange?.(event);
      },
      [isControlled, onChange]
    );

    const countText = maxLength !== undefined ? `${currentLength}/${maxLength}` : `${currentLength}`;

    return (
      <div
        className={clsx(
          'lds-textarea-wrapper',
          `lds-textarea-wrapper--${size}`,
          isFocused && 'is-focused',
          mergedError && 'is-error',
          disabled && 'is-disabled',
          wrapperClassName
        )}
      >
        <textarea
          ref={ref}
          className={clsx('lds-textarea', className)}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          maxLength={maxLength}
          onChange={handleChange}
          {...props}
        />

        {showCount ? (
          <div className="lds-textarea__footer">
            <span className="lds-textarea__count">{countText}</span>
          </div>
        ) : null}

        {showResizeHandle ? <span className="lds-textarea__resize-handle" aria-hidden="true" /> : null}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
