import { Column } from "@tanstack/react-table";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronsUpDownIcon,
  EyeOffIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

interface IDataTableColumnHeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  column: Column<any>;
  title: React.ReactNode;
}

export function DataTableColumnHeader({
  column,
  title,
}: IDataTableColumnHeaderProps) {
  if(!column.getCanSort()){
    return title;
  }
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 data-[state=active]:bg-accent cursor-pointer"
          >
            {title}
            {!column.getIsSorted() && <ChevronsUpDownIcon />}
            {column.getIsSorted() === "asc" && <ArrowUpIcon />}
            {column.getIsSorted() === "desc" && <ArrowDownIcon />}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          <DropdownMenuItem
            className="cursor-pointer"
            onSelect={() => column.toggleSorting(false)}
          >
            <ArrowUpIcon className="text-muted-foreground size-4" /> Asc
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onSelect={() => column.toggleSorting(true)}
          >
            <ArrowDownIcon className="text-muted-foreground size-4" />
            Desc
          </DropdownMenuItem>

          {column.getCanHide() && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onSelect={()=> column.toggleVisibility(false)}>
                <EyeOffIcon className="text-muted-foreground size-4" />
                Hide
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
