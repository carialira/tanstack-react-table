import { cn } from "@/lib/utils";
import { flexRender } from "@tanstack/react-table";
import { memo } from "react";
import { TableBody, TableCell, TableRow } from "../ui/table";
import { useDataTable } from "./data-table-context";

export function DataTableBody(){
  const { table } = useDataTable();  
  return(
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow className={cn(row.getCanSelect() && 'cursor-pointer')} key={row.id} data-state={row.getIsSelected() ? "selected" : undefined} 
        onClick={row.getToggleSelectedHandler()}>
          {row.getVisibleCells().map((cell) => (
            <TableCell
              key={cell.id}
              style={{ width: `calc(var(--col-${cell.column.id}-size) * 1rem)`}}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
  </TableBody>
  )
}

export const MemorizedDataTableBody = memo(DataTableBody);