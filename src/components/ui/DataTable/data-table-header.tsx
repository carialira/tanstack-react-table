import { cn } from "@/lib/utils";
import { flexRender } from "@tanstack/react-table";
import { TableHead, TableHeader, TableRow } from "../table";
import { createPinnedCellStyle } from "./createPinnedCellStyle";
import { useDataTable } from "./data-table-context";

export function DataTableHeader() {
  const { table } = useDataTable();

  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => {
        return (
          <TableRow key={headerGroup.id} className="bg-stone-600">
            {headerGroup.headers.map((header, index, headerCells) => {
              const cellStyle = createPinnedCellStyle({
                index,
                rowLength: headerCells.length,
                context: header,
              });
              return (
                <TableHead
                  key={header.id}
                  colSpan={header.colSpan}
                  className={cn(
                    "relative group whitespace-nowrap text-left font-normal text-stone-100 p-0",
                    "border-t border-solid border-t-stone-600 border-b border-b-stone-600 border-r border-r-stone-300 first:border-l first:border-l-stone-300 bg-stone-600",
                    {
                      "sticky z-20 border-t-cyan-800 border-b-cyan-800":
                        Boolean(header.column.getIsPinned()),
                    }
                  )}
                  style={{
                    width: `calc(var(--header-${header.id}-size) * 1rem)`,
                    ...cellStyle,
                  }}
                >
                  {!header.isPlaceholder &&
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  {header.column.getCanResize() && (
                    <div
                      className={cn(
                        "absolute right-0 top-0 h-full bg-primary/10 w-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-all duration-300",
                        header.column.getIsResizing() &&
                          "opacity-100 bg-primary/30"
                      )}
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                    />
                  )}
                </TableHead>
              );
            })}
          </TableRow>
        );
      })}
    </TableHeader>
  );
}
