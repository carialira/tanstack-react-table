import { DataTable } from "../ui/DataTable/data-table";
import { DataTableColumnsVisibilityDropdown } from "../ui/DataTable/data-table-columns-visibility-dropdown";
import { DataTableContent } from "../ui/DataTable/data-table-content";
import { DataTableFacetedFilter } from "../ui/DataTable/data-table-faceted-filter";
import { DataTablePagination } from "../ui/DataTable/data-table-pagination";
import { DataTableTextFilter } from "../ui/DataTable/data-table-text-filter";
import { columns } from "./columns";
import { invoices } from "./data";

export function InvoicesTable() {
  return (
    <div className="flex flex-col justify-center gap-4 w-full p-4">
      <h1 className="text-4xl text-slate-300">DataTable Component</h1>

      <DataTable
        data={invoices}
        columns={columns}
        pagination={{ pageSize: 5, pageIndex: 0 }}
      >
        <div className="mb-4 flex justify-center items-center gap-4 w-full">
          <DataTableTextFilter placeholder="Search..." />
          <DataTableColumnsVisibilityDropdown />
          <DataTableFacetedFilter column="paymentStatus" />
        </div>
        <DataTableContent />

        <div className="flex justify-end items-center mt-4 w-full">
          <DataTablePagination />
        </div>
      </DataTable>
    </div>
  );
}
