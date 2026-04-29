import React from 'react';
import { clsx } from 'clsx';

export type TagSize = 'large' | 'default-size' | 'small';
export type TagVariant = 'fill' | 'light' | 'outline';
export type TagColor = 'blue' | 'green' | 'orange' | 'red' | 'gray';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * 标签尺寸
   * @default 'default-size'
   */
  size?: TagSize;
  /**
   * 标签样式类型
   * @default 'light'
   */
  variant?: TagVariant;
  /**
   * 标签语义色
   * @default 'gray'
   */
  color?: TagColor;
  /**
   * 左侧图标，可选
   */
  leftIcon?: React.ReactNode;
  /**
   * 右侧图标，可选
   */
  rightIcon?: React.ReactNode;
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      className,
      size = 'default-size',
      variant = 'light',
      color = 'gray',
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const isInteractive = typeof props.onClick === 'function';

    return (
      <span
        ref={ref}
        className={clsx(
          'lds-tag',
          `lds-tag--${size}`,
          `lds-tag--${variant}`,
          `lds-tag--${color}`,
          {
            'lds-tag--interactive': isInteractive,
          },
          className
        )}
        {...props}
      >
        {leftIcon ? <span className="lds-tag__icon lds-tag__icon--left">{leftIcon}</span> : null}
        {children ? <span className="lds-tag__content">{children}</span> : null}
        {rightIcon ? <span className="lds-tag__icon lds-tag__icon--right">{rightIcon}</span> : null}
      </span>
    );
  }
);

Tag.displayName = 'Tag';
