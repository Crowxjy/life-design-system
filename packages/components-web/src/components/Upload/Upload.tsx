import React from 'react';
import { clsx } from 'clsx';
import { Icon } from '../Icon/Icon';

export interface UploadFileItem {
  id?: string;
  name?: string;
  url: string;
  file?: File;
}

export type UploadVisualState = 'normal' | 'hover' | 'active' | 'error';

export interface UploadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /**
   * 当前文件列表，受控模式
   */
  value?: UploadFileItem[];
  /**
   * 默认文件列表，非受控模式
   */
  defaultValue?: UploadFileItem[];
  /**
   * 文件列表变化回调
   */
  onChange?: (files: UploadFileItem[]) => void;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 原生 input accept
   * @default 'image/*'
   */
  accept?: string;
  /**
   * 是否允许多选
   * @default false
   */
  multiple?: boolean;
  /**
   * 最大文件数量
   * @default 1
   */
  maxCount?: number;
  /**
   * 上传按钮文案
   * @default '上传'
   */
  triggerText?: React.ReactNode;
  /**
   * 强制视觉状态，用于文档演示
   * @default 'normal'
   */
  visualState?: UploadVisualState;
  /**
   * 输入框 id，方便与表单 label 关联
   */
  inputId?: string;
  /**
   * 输入框 name
   */
  name?: string;
  /**
   * 删除按钮无障碍名称
   * @default '删除图片'
   */
  removeAriaLabel?: string;
  /**
   * 上传按钮无障碍名称
   * @default '上传图片'
   */
  triggerAriaLabel?: string;
}

const DEFAULT_TRIGGER_TEXT = '上传';

function readFileAsDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
    reader.onerror = () => reject(reader.error ?? new Error('Failed to read file.'));
    reader.readAsDataURL(file);
  });
}

export const Upload = React.forwardRef<HTMLDivElement, UploadProps>(
  (
    {
      className,
      value,
      defaultValue = [],
      onChange,
      disabled = false,
      accept = 'image/*',
      multiple = false,
      maxCount = 1,
      triggerText = DEFAULT_TRIGGER_TEXT,
      visualState = 'normal',
      inputId,
      name,
      removeAriaLabel = '删除图片',
      triggerAriaLabel = '上传图片',
      children,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const isControlled = value !== undefined;
    const [innerValue, setInnerValue] = React.useState<UploadFileItem[]>(defaultValue);
    const mergedValue = (isControlled ? value : innerValue) ?? [];
    const visibleItems = mergedValue.slice(0, maxCount);
    const shouldRenderTrigger = visibleItems.length < maxCount;

    const updateValue = React.useCallback(
      (nextValue: UploadFileItem[]) => {
        const normalized = nextValue.slice(0, maxCount);

        if (!isControlled) {
          setInnerValue(normalized);
        }

        onChange?.(normalized);
      },
      [isControlled, maxCount, onChange]
    );

    const handleSelectFiles = React.useCallback(
      async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files ?? []);

        if (!files.length) {
          return;
        }

        const availableCount = Math.max(maxCount - visibleItems.length, 0);
        const selectedFiles = files.slice(0, availableCount);

        try {
          const nextItems = await Promise.all(
            selectedFiles.map(async (file, index) => ({
              id: `${file.name}-${file.lastModified}-${index}`,
              name: file.name,
              url: await readFileAsDataUrl(file),
              file,
            }))
          );

          updateValue([...visibleItems, ...nextItems]);
        } finally {
          event.target.value = '';
        }
      },
      [maxCount, updateValue, visibleItems]
    );

    const handleRemove = React.useCallback(
      (index: number) => {
        const nextItems = visibleItems.filter((_, currentIndex) => currentIndex !== index);
        updateValue(nextItems);
      },
      [updateValue, visibleItems]
    );

    return (
      <div
        ref={ref}
        className={clsx('lds-upload', disabled && 'is-disabled', className)}
        {...props}
      >
        <input
          ref={inputRef}
          id={inputId}
          className="lds-upload__input"
          type="file"
          accept={accept}
          multiple={multiple}
          name={name}
          disabled={disabled}
          onChange={handleSelectFiles}
        />

        <div className="lds-upload__list">
          {visibleItems.map((item, index) => (
            <div
              key={item.id ?? item.url ?? `${index}`}
              className="lds-upload__item"
            >
              <img
                className="lds-upload__image"
                src={item.url}
                alt={item.name ?? `已上传图片 ${index + 1}`}
              />
              {!disabled ? (
                <button
                  type="button"
                  className="lds-upload__remove"
                  aria-label={removeAriaLabel}
                  onClick={() => handleRemove(index)}
                >
                  <Icon name="ic-error-line" aria-hidden="true" />
                </button>
              ) : null}
            </div>
          ))}

          {shouldRenderTrigger ? (
            <button
              type="button"
              className={clsx(
                'lds-upload__trigger',
                visualState === 'hover' && 'is-hover',
                visualState === 'active' && 'is-active',
                visualState === 'error' && 'is-error'
              )}
              disabled={disabled}
              onClick={() => inputRef.current?.click()}
              aria-label={triggerAriaLabel}
            >
              <Icon name="ic-add-line" aria-hidden="true" />
              <span className="lds-upload__text">{triggerText}</span>
            </button>
          ) : null}
        </div>

        {children ? <div className="lds-upload__extra">{children}</div> : null}
      </div>
    );
  }
);

Upload.displayName = 'Upload';
