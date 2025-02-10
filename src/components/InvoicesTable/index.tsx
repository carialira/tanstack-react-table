import { DataTable } from "../DataTable/data-table";
import { DataTableColumnsVisibilityDropdown } from "../DataTable/data-table-columns-visibility-dropdown";
import { DataTableContent } from "../DataTable/data-table-content";
import { DataTableFacetedFilter } from "../DataTable/data-table-faceted-filter";
import { DataTablePagination } from "../DataTable/data-table-pagination";
import { DataTableTextFilter } from "../DataTable/data-table-text-filter";
import { columns } from "./columns";
import { invoices } from "./data";

export function InvoicesTable() {
  return (
    <div className="flex flex-col justify-center gap-4">
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
