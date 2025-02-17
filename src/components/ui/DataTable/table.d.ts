/* eslint-disable @typescript-eslint/no-unused-vars */
import '@tanstack/react-table';

declare module '@tanstack/react-table' {
  type Alignment = 'left' | 'center' | 'right';
  interface ColumnMeta<TData, TValue>{
    nameInFilters?: string;
    align?: Alignment;
  }
}