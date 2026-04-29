import React from 'react';
import { clsx } from 'clsx';
import { Icon } from '../Icon/Icon';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  size?: 'large' | 'default-size' | 'small';
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  wrapperClassName?: string;
  isFocused?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, wrapperClassName, size = 'default-size', prefixIcon, suffixIcon, clearable, onClear, disabled, isFocused, ...props }, ref) => {
    return (
      <div
        className={clsx(
          'lds-input-wrapper',
          `lds-input-wrapper--${size}`,
          disabled && 'is-disabled',
          isFocused && 'is-focused',
          wrapperClassName
        )}
      >
        {prefixIcon && <span className="lds-input__prefix">{prefixIcon}</span>}
        <input
          ref={ref}
          className={clsx('lds-input', className)}
          disabled={disabled}
          {...props}
        />
        {clearable && (
          <span className="lds-input__clear" onClick={onClear}>
            <Icon name="ic-error-round" />
          </span>
        )}
        {suffixIcon && <span className="lds-input__suffix">{suffixIcon}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
