import { Column } from "@tanstack/react-table";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronsUpDownIcon,
  EyeOffIcon,
  PinIcon,
} from "lucide-react";
import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../dropdown-menu";

interface IDataTableColumnHeaderProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  column: Column<any>;
  title: React.ReactNode;
}

export function DataTableColumnHeader({
  column,
  title,
}: IDataTableColumnHeaderProps) {
  if (!column.getCanSort()) {
    return (
      <span className="data-[state=active]:bg-accent cursor-pointer hover:bg-transparent w-full flex pl-2">
        {title}
      </span>
    );
  }
  const isPinned = column.getIsPinned();
  
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="data-[state=active]:bg-accent cursor-pointer hover:bg-transparent hover:text-slate-300 focus-visible:ring-transparent"
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

          {column.getCanPin() && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onSelect={() => {
                  if (isPinned !== "left") {
                    column.pin("left");
                  } else {
                    column.pin(false);
                  }
                }}
              >
                <PinIcon className="text-muted-foreground size-4 rotate-45" />
                {isPinned !== "left" ? "Pin left" : "Unpin left"}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onSelect={() => {
                  if (isPinned !== "right") {
                    column.pin("right");
                  } else {
                    column.pin(false);
                  }
                }}
              >
                <PinIcon className="text-muted-foreground size-4 -rotate-45" />
                {isPinned !== "right" ? "Pin right" : "Unpin right"}
              </DropdownMenuItem>
            </>
          )}

          {column.getCanHide() && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer"
                onSelect={() => column.toggleVisibility(false)}
              >
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
