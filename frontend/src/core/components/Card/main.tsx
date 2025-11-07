import { forwardRef } from 'react';
import { cn } from '@/core/utils';
import type { CardProps } from './types';

/**
 * @component Card
 * @summary Container card component
 * @domain core
 * @type ui-component
 * @category layout
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('rounded-lg border border-gray-200 bg-white shadow-sm', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
