import { Invoice } from "@/entities/Invoice";
import { ColumnDef } from "@tanstack/react-table";
import {
  CreditCardIcon,
  Edit2Icon,
  EllipsisIcon,
  Trash2Icon,
} from "lucide-react";
import { DataTableColumnHeader } from "../DataTable/data-table-column-header";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const columns: ColumnDef<Invoice>[] = [
  {
    id: "select",
    header: ({ table }) => {
      const getIsAllPageRowsSelected =
        table.getRowCount() === table.getSelectedRowModel().rows.length;
      return (
        <Checkbox
          className="mt-px"
          checked={
            getIsAllPageRowsSelected ||
            ((table.getIsAllPageRowsSelected() ||
              table.getIsSomePageRowsSelected()) &&
              "indeterminate")
          }
          onCheckedChange={() => table.toggleAllRowsSelected()}
          aria-label="Select all"
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          className="mt-[2px]"
          checked={row.getIsSelected()}
          onCheckedChange={row.getToggleSelectedHandler()}
          disabled={!row.getCanSelect()}
        />
      );
    },
    size: 20,
    enableHiding: false,
    enablePinning: false,
    enableResizing: false,
    enableSorting: false,
    enableGlobalFilter: false,
    enableColumnFilter: false,
    enableMultiSort: false,
  },
  {
    accessorKey: "invoice",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="#" />;
    },
    size: 30,
    enableResizing: false,
    enableSorting: false,
    meta: {
      nameInFilters: "Order number #",
    },
  },
  {
    accessorKey: "paymentStatus",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader
          column={column}
          title={
            <div className="flex items-center gap-2">
              <CreditCardIcon />
              Payment Status
            </div>
          }
        />
      );
    },
    meta: {
      nameInFilters: "Payment status",
    },
  },
  {
    accessorKey: "paymentMethod",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Payment Method" />;
    },
    meta: {
      nameInFilters: "Payment Method",
    },
  },
  {
    accessorKey: "totalAmount",
    header: ({ column }) => {
      return <DataTableColumnHeader column={column} title="Amount" />;
    },
    meta: {
      nameInFilters: "Amount",
    },
  },
  {
    id: "actions",
    enableHiding: false,
    enablePinning: false,
    enableResizing: false,
    enableSorting: false,
    enableGlobalFilter: false,
    enableColumnFilter: false,
    enableMultiSort: false,
    cell: ({ row }) => {
      const invoice = row.original;
      return (
        <div className="flex justify-end items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <EllipsisIcon className="size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onSelect={() => alert(`Edit ${invoice.invoice}`)}
                className="cursor-pointer"
              >
                <Edit2Icon className="size-4" />
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => alert(`Delete ${invoice.invoice}`)}
                className="cursor-pointer"
              >
                <Trash2Icon className="size-4" />
                Deletar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
