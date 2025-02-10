import {
  ColumnDef,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect, useMemo, useRef } from "react";
import { DataTableContext } from "./data-table-context";

interface IDataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  children: React.ReactNode;
  pagination?: PaginationState;
  onSelectRow?: (selectedRows: TData[]) => void;
}

export function DataTable<TData>({
  data,
  columns,
  children,
  pagination,
  onSelectRow
}: IDataTableProps<TData>) {
  const table = useReactTable({
    data: data,
    columns: columns,
    columnResizeMode: "onChange",
    globalFilterFn: "includesString",
    initialState: {
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const selectedRow = useMemo(
    () => table.getSelectedRowModel().flatRows.map((row) => row.original),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [table.getSelectedRowModel().flatRows]
  );

  const memoOnSelectRow = useRef(onSelectRow);
  memoOnSelectRow.current = onSelectRow;

  useEffect(() => {
    memoOnSelectRow.current?.(selectedRow);
  },[selectedRow]);

  return (
    <DataTableContext.Provider value={{ table }}>
      {children}
    </DataTableContext.Provider>
  );
}
