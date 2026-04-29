import React from 'react';
import { clsx } from 'clsx';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The ID of the icon in the SVG sprite (e.g., 'ic-add-round-line')
   */
  name: string;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, className, ...props }, ref) => {
    return (
      <svg ref={ref} className={clsx('icon', className)} {...props}>
        <use href={`#${name}`} />
      </svg>
    );
  }
);

Icon.displayName = 'Icon';
