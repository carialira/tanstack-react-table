import { cn } from "@/lib/utils";
import { flexRender } from "@tanstack/react-table";
import { TableHead, TableHeader, TableRow } from "../ui/table";
import { useDataTable } from "./data-table-context";

export function DataTableHeader() {
  const { table } = useDataTable();
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead
              key={header.id}
              colSpan={header.colSpan}
              className="relative group"
              style={{
                width: `calc(var(--header-${header.id}-size) * 1rem)`,
              }}
            >
              {!header.isPlaceholder &&
                flexRender(header.column.columnDef.header, header.getContext())}
              {header.column.getCanResize() && (
                <div
                  className={cn(
                    "absolute right-0 top-0 h-full bg-primary/10 w-1 cursor-col-resize opacity-0 group-hover:opacity-100 transition-all duration-300",
                    header.column.getIsResizing() && "opacity-100 bg-primary/30"
                  )}
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                />
              )}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
}
