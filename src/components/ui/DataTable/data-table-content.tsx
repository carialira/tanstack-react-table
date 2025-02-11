import { useMemo } from "react";
import { Table } from "../table";
import { DataTableBody, MemorizedDataTableBody } from "./data-table-body";
import { useDataTable } from "./data-table-context";
import { DataTableHeader } from "./data-table-header";

export function DataTableContent(){
  const { table } = useDataTable();
  const { columnSizingInfo, columnSizing } = table.getState();

  const colSizeVariables = useMemo(
    () =>
      table.getFlatHeaders().reduce<Record<string, number>>(
        (acc, header) => ({
          ...acc,
          [`--header-${header.id}-size`]: header.getSize(),
          [`--col-${header.column.id}-size`]: header.column.getSize(),
        }),
        {}
      ),
    [columnSizingInfo, columnSizing, table.getFlatHeaders]
  );

  return(
    <Table style={colSizeVariables} className="overflow-x-auto w-full">
      <DataTableHeader />
      {columnSizingInfo.isResizingColumn && <MemorizedDataTableBody />}
      {!columnSizingInfo.isResizingColumn && <DataTableBody />}
    </Table>
  )
}