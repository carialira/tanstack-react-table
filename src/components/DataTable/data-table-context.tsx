import { Table } from "@tanstack/react-table";
import { createContext, useContext } from "react";

interface IDataTableContextValue{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: Table<any>;
}

export const DataTableContext = createContext({} as IDataTableContextValue);

export function useDataTable(){
  const ctxValue = useContext(DataTableContext);

  if(!ctxValue){
    throw new Error("'useDataTable' should be used inside DataTable");
  }
  return ctxValue;
}