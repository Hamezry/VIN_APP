// Table.tsx

import React, { ReactNode } from "react";

interface TableProps<T> {
  data: T[];
  columns: Array<{ key: keyof T; header: string }>;
}

const Table = <T,>({ data, columns }: TableProps<T>) => {
  return (
    <div className="h-[100%] table-auto overflow-auto w-full">
      {" "}
      <table className=" w-full overflow-auto mb-6">
        <thead className="sticky top-0 bg-VIN-navColor rounded-md text-VIN-textWhite text-left px-4 border-b">
          <tr>
            {columns.map((col) => (
              <th className="sticky  p-4" key={col.key.toString()}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="">
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td className="p-4" key={col.key.toString()}>
                  {item[col.key] as ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

