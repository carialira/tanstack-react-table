import { Input } from "../input";
import { useDataTable } from "./data-table-context";

interface IDataTableTextFilterProps {
  column?: string;
  placeholder?: string;
}

export function DataTableTextFilter({
  placeholder,
  column,
}: IDataTableTextFilterProps) {
  const { table } = useDataTable();

  if (column) {
    const tableColumn = table.getColumn(column);
    const value = tableColumn?.getFilterValue() as string | undefined;

    return (
      <Input
        value={value ?? ""}
        placeholder={placeholder}
        onChange={(event) => tableColumn?.setFilterValue(event.target.value)}
      />
    );
  }

  return (
    <Input
      placeholder={placeholder}
      onChange={(event) => table.setGlobalFilter(event.target.value)}
    />
  );
}
