import { cn } from "@/lib/utils";
import { flexRender } from "@tanstack/react-table";
import { memo } from "react";
import { TableBody, TableCell, TableRow } from "../table";
import { createPinnedCellStyle } from "./createPinnedCellStyle";
import { useDataTable } from "./data-table-context";

export function DataTableBody() {
  const { table } = useDataTable();
  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow
          className={cn(row.getCanSelect() && "cursor-pointer")}
          key={row.id}
          data-state={row.getIsSelected() ? "selected" : undefined}
          onClick={row.getToggleSelectedHandler()}
        >
          {row.getVisibleCells().map((cell, index, rowCells) => {
            const columnDef = cell.column.columnDef;
            const alignment =
                  columnDef.meta && 'align' in columnDef.meta
                    ? columnDef.meta.align
                    : 'left';
                const alignmentClass =
                  alignment === 'center'
                    ? 'text-center'
                    : alignment === 'right'
                    ? 'text-right'
                    : 'text-left';
            const cellStyle = createPinnedCellStyle({
              index,
              rowLength: rowCells.length,
              context: cell,
            });
            return (
              <TableCell
                key={cell.id}
                className={cn(
                    'whitespace-nowrap font-normal text-stone-950 bg-white py-0',
                    'border-b border-solid border-b-stone-300 border-r border-r-stone-300 first:border-l first:border-l-stone-300',
                    alignmentClass,
                    {
                      'sticky z-20': Boolean(cell.column.getIsPinned()),
                    }
                )}
                style={{
                  width: `calc(var(--col-${cell.column.id}-size) * 1rem)`,
                  ...cellStyle,
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableBody>
  );
}

export const MemorizedDataTableBody = memo(DataTableBody);
