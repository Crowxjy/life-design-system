import React from 'react';
import { clsx } from 'clsx';

export type ButtonSize = 'large' | 'default-size' | 'small';
export type ButtonVariant = 'primary' | 'default' | 'secondary' | 'text' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The size of the button
   * @default 'default-size'
   */
  size?: ButtonSize;
  /**
   * The variant of the button
   * @default 'default'
   */
  variant?: ButtonVariant;
  /**
   * Optional icon to render inside the button. For 'icon' variant, this is the only content.
   */
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size = 'default-size', variant = 'default', icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'lds-btn',
          `lds-btn--${size}`,
          `lds-btn--${variant}`,
          className
        )}
        {...props}
      >
        {icon && <span className="lds-btn__icon">{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
