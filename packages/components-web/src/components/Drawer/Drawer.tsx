import React, { useEffect, useId, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { clsx } from 'clsx';
import { Icon } from '../Icon/Icon';

const DRAWER_ANIMATION_MS = 280;

export type DrawerSize = 'large' | 'default-size' | 'small';

export interface DrawerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * 是否打开抽屉
   * @default false
   */
  open?: boolean;
  /**
   * 标题区域
   */
  title?: React.ReactNode;
  /**
   * 抽屉尺寸
   * @default 'default-size'
   */
  size?: DrawerSize;
  /**
   * 自定义底部区域
   */
  footer?: React.ReactNode;
  /**
   * 是否显示底部区域
   * 默认跟随 footer 是否传入
   */
  showFooter?: boolean;
  /**
   * 标题区域右侧附加内容
   */
  extra?: React.ReactNode;
  /**
   * 点击蒙层是否关闭
   * @default true
   */
  maskClosable?: boolean;
  /**
   * 按下 Esc 是否关闭
   * @default true
   */
  closeOnEsc?: boolean;
  /**
   * 是否显示右上角关闭按钮
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * 关闭回调
   */
  onClose?: () => void;
  /**
   * 获取挂载容器，默认挂载到 document.body
   */
  getContainer?: () => HTMLElement | null;
  /**
   * 自定义抽屉宽度，会覆盖 size 对应的默认宽度
   */
  width?: number | string;
  /**
   * 自定义内容区域类名
   */
  bodyClassName?: string;
  /**
   * 关闭按钮可访问名称
   * @default '关闭抽屉'
   */
  closeLabel?: string;
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      className,
      open = false,
      title,
      size = 'default-size',
      footer,
      showFooter,
      extra,
      children,
      maskClosable = true,
      closeOnEsc = true,
      showCloseButton = true,
      onClose,
      getContainer,
      width,
      bodyClassName,
      closeLabel = '关闭抽屉',
      style,
      ...props
    },
    ref
  ) => {
    const titleId = useId();
    const [shouldRender, setShouldRender] = useState(open);
    const [visible, setVisible] = useState(open);

    const container = useMemo(() => {
      if (typeof document === 'undefined') return null;
      return getContainer?.() ?? document.body;
    }, [getContainer]);

    useEffect(() => {
      if (open) {
        setShouldRender(true);
        setVisible(false);

        let rafId2 = 0;
        const rafId1 = window.requestAnimationFrame(() => {
          rafId2 = window.requestAnimationFrame(() => {
            setVisible(true);
          });
        });

        return () => {
          window.cancelAnimationFrame(rafId1);
          window.cancelAnimationFrame(rafId2);
        };
      }

      setVisible(false);

      const timer = window.setTimeout(() => {
        setShouldRender(false);
      }, DRAWER_ANIMATION_MS);

      return () => window.clearTimeout(timer);
    }, [open]);

    useEffect(() => {
      if (!shouldRender || !closeOnEsc) {
        return undefined;
      }

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose?.();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [closeOnEsc, onClose, shouldRender]);

    useEffect(() => {
      if (!shouldRender || typeof document === 'undefined') {
        return undefined;
      }

      const { body } = document;
      const previousOverflow = body.style.overflow;
      body.style.overflow = 'hidden';

      return () => {
        body.style.overflow = previousOverflow;
      };
    }, [shouldRender]);

    if (!shouldRender || !container) {
      return null;
    }

    const mergedStyle = {
      ...style,
      ...(width !== undefined
        ? {
            ['--lds-drawer-width' as const]: typeof width === 'number' ? `${width}px` : width,
          }
        : null),
    } as React.CSSProperties;

    const shouldShowFooter = showFooter ?? footer !== undefined;

    return createPortal(
      <div
        className={clsx('lds-drawer-root', visible && 'is-open')}
        onClick={(event) => {
          if (event.target === event.currentTarget && maskClosable) {
            onClose?.();
          }
        }}
      >
        <div className="lds-drawer-root__mask" aria-hidden="true" />
        <div
          ref={ref}
          className={clsx('lds-drawer', `lds-drawer--${size}`, className)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleId : undefined}
          style={mergedStyle}
          {...props}
        >
          <div className="lds-drawer__header">
            <div className="lds-drawer__header-main">
              {title ? (
                <h2 id={titleId} className="lds-drawer__title">
                  {title}
                </h2>
              ) : null}
              {extra ? <div className="lds-drawer__extra">{extra}</div> : null}
            </div>
            {showCloseButton ? (
              <button
                type="button"
                className="lds-drawer__close"
                onClick={() => onClose?.()}
                aria-label={closeLabel}
              >
                <Icon name="ic-error-line" aria-hidden="true" />
              </button>
            ) : null}
          </div>

          <div className={clsx('lds-drawer__body', bodyClassName)}>{children}</div>

          {shouldShowFooter ? <div className="lds-drawer__footer">{footer}</div> : null}
        </div>
      </div>,
      container
    );
  }
);

Drawer.displayName = 'Drawer';
