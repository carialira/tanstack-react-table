import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import { Button } from "../button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { useDataTable } from "./data-table-context";

export function DataTablePagination() {
  const { table } = useDataTable();
  const sizes = [2, 5, 10, 20, 50, 100];  
  const optionsSize = sizes.filter((size) => size <= table?.getRowCount());

  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-2">
        <small>Rows per page</small>
        <Select value={String(table?.getState().pagination.pageSize)} onValueChange={(value) => table?.setPageSize(Number(value))}>
          <SelectTrigger className="w-[80px] h-8">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {optionsSize.map((option) => (
                <SelectItem key={option} value={String(option)}>
                  {option}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <small>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </small>
      <div className="space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table?.firstPage()}
          disabled={!table?.getCanPreviousPage()}
        >
          <ChevronsLeftIcon className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table?.previousPage()}
          disabled={!table?.getCanPreviousPage()}
        >
          <ChevronLeftIcon className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table?.nextPage()}
          disabled={!table?.getCanNextPage()}
        >
          <ChevronRightIcon className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table?.lastPage()}
          disabled={!table?.getCanNextPage()}
        >
          <ChevronsRightIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
}
