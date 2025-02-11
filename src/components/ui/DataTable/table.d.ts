/* eslint-disable @typescript-eslint/no-unused-vars */
import '@tanstack/react-table';

declare module '@tanstack/react-table' {
  type Position = 'left' | 'right';
  interface ColumnMeta<TData, TValue>{
    nameInFilters?: string;
    isFixed?: Position;
  }
}