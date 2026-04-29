import React from 'react';
import { clsx } from 'clsx';
import { Tag } from '../Tag/Tag';

export const TableWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={clsx('lds-table-wrapper', className)} {...props} />
);
TableWrapper.displayName = 'TableWrapper';

export const Table = React.forwardRef<HTMLTableElement, React.TableHTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => <table ref={ref} className={clsx('lds-table', className)} {...props} />
);
Table.displayName = 'Table';

export const Thead = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => <thead ref={ref} className={clsx('lds-table__thead', className)} {...props} />
);
Thead.displayName = 'Thead';

export const Tbody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  (props, ref) => <tbody ref={ref} {...props} />
);
Tbody.displayName = 'Tbody';

export const Tr = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => <tr ref={ref} className={clsx('lds-table__row', className)} {...props} />
);
Tr.displayName = 'Tr';

export const Th = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => <th ref={ref} className={clsx('lds-table__th', className)} {...props} />
);
Th.displayName = 'Th';

export const Td = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...props }, ref) => <td ref={ref} className={clsx('lds-table__td', className)} {...props} />
);
Td.displayName = 'Td';

export const TableCellProduct = ({ img, title, tag, tagVariant = 'default', id }: any) => (
  <div className="lds-table-cell--product">
    <img src={img} alt="商品图" className="lds-table-cell__product-img" />
    <div className="lds-table-cell__product-info">
      <div className="lds-table-cell__product-title-wrap">
        <h4 className="lds-table-cell__product-title">{title}</h4>
        {tag && (
          <Tag
            size="small"
            variant={tagVariant === 'default' ? 'outline' : 'light'}
            color={tagVariant === 'orange' ? 'orange' : tagVariant === 'red' ? 'red' : 'gray'}
          >
            {tag}
          </Tag>
        )}
      </div>
      <div className="lds-table-cell__product-meta">
        <span className="lds-table-cell__product-id">商品ID：{id}</span>
      </div>
    </div>
  </div>
);

export const TableCellAmount = ({ children }: any) => <div className="lds-table-cell--amount">{children}</div>;
export const TableCellOperation = ({ children }: any) => <div className="lds-table-cell--operation">{children}</div>;

export interface TableCellActionProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  danger?: boolean;
}
export const TableCellAction = React.forwardRef<HTMLAnchorElement, TableCellActionProps>(
  ({ className, danger, ...props }, ref) => (
    <a ref={ref} className={clsx('lds-table-cell__action', danger && 'is-danger', className)} {...props} />
  )
);
TableCellAction.displayName = 'TableCellAction';
