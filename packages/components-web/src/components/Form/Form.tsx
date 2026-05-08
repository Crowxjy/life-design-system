import React from 'react';
import { clsx } from 'clsx';
import { Icon } from '../Icon/Icon';

const DEFAULT_LABEL_WIDTH = '90px';

function toCssSize(value?: number | string) {
  if (value === undefined) {
    return undefined;
  }

  return typeof value === 'number' ? `${value}px` : value;
}

export interface FormProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 统一设置表单项左侧标题宽度
   * @default 90
   */
  labelWidth?: number | string;
}

export interface FormItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * 左侧标题内容
   */
  label?: React.ReactNode;
  /**
   * 当前项对应的控件 id，用于 label 关联
   */
  htmlFor?: string;
  /**
   * 是否展示必填标识
   * @default false
   */
  required?: boolean;
  /**
   * 帮助提示文案，会以浏览器原生 title 的形式挂在问号图标上
   */
  tooltip?: string;
  /**
   * 点击帮助图标的回调
   */
  onTooltipClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * 帮助图标无障碍名称
   * @default '查看字段说明'
   */
  tooltipAriaLabel?: string;
  /**
   * 底部常规说明文案
   */
  description?: React.ReactNode;
  /**
   * 底部报错文案，存在时会覆盖 description 并切换为错误态
   */
  error?: React.ReactNode;
  /**
   * 单独覆盖当前项的标题宽度
   */
  labelWidth?: number | string;
}

export const Form = React.forwardRef<HTMLDivElement, FormProps>(
  ({ className, style, labelWidth = 90, ...props }, ref) => {
    const mergedStyle = {
      ...style,
      ['--lds-form-label-width' as const]: toCssSize(labelWidth) ?? DEFAULT_LABEL_WIDTH,
    } as React.CSSProperties;

    return <div ref={ref} className={clsx('lds-form', className)} style={mergedStyle} {...props} />;
  }
);

Form.displayName = 'Form';

export const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  (
    {
      className,
      label,
      htmlFor,
      required = false,
      tooltip,
      onTooltipClick,
      tooltipAriaLabel = '查看字段说明',
      description,
      error,
      labelWidth,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const message = error ?? description;
    const hasError = error !== undefined && error !== null && error !== false;
    const shouldRenderTooltip = Boolean(tooltip) || Boolean(onTooltipClick);
    const mergedStyle = {
      ...style,
      ...(labelWidth !== undefined
        ? {
            ['--lds-form-label-width' as const]: toCssSize(labelWidth),
          }
        : null),
    } as React.CSSProperties;

    const labelContent = (
      <>
        <span className="lds-form-item__label-text">{label}</span>
        {shouldRenderTooltip ? (
          <button
            type="button"
            className="lds-form-item__tooltip"
            title={tooltip}
            aria-label={tooltipAriaLabel}
            onClick={onTooltipClick}
          >
            <Icon name="ic-help-line" aria-hidden="true" />
          </button>
        ) : null}
        {required ? (
          <span className="lds-form-item__required" aria-hidden="true">
            <Icon name="ic-required-line" />
          </span>
        ) : null}
      </>
    );

    return (
      <div ref={ref} className={clsx('lds-form-item', className)} style={mergedStyle} {...props}>
        <div className="lds-form-item__label">
          {htmlFor ? (
            <label className="lds-form-item__label-inner" htmlFor={htmlFor}>
              {labelContent}
            </label>
          ) : (
            <div className="lds-form-item__label-inner">{labelContent}</div>
          )}
        </div>

        <div className="lds-form-item__main">
          <div className="lds-form-item__control">{children}</div>
          {message ? (
            <div
              className={clsx('lds-form-item__message', hasError && 'is-error')}
              role={hasError ? 'alert' : undefined}
            >
              {message}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);

FormItem.displayName = 'FormItem';
