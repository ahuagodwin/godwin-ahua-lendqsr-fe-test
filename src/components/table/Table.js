import React from "react";
import { table_body, table_head } from "../../common/data/data";
import { Style } from "../../common/styled/Styled";
import { Icons } from "../../constant/Icons";

const Table = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left text-black bg-white p-4">
          <thead className="text-xs uppercase bg-[#F9FAFB] text-black">
            
                <tr>
                {table_head.map((item, i) => (
                <th scope="col" className="px-4 py-3" key={i}>
                  <div className="flex items-center">
                    {item.title}
                    <Style.Section sx="cursor-pointer ml-2">
                      {" "}
                      {item.sort}
                    </Style.Section>
                  </div>
                </th>
                 ))}
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Action</span>
                </th>
                
              </tr>
           
          </thead>
          <tbody>
          {table_body.map((item, i) => (
              <tr className="bg-white text-[#545F7D">
              <th
                scope="row"
                className="px-4 py-4 font-medium whitespace-nowrap"
              >
               {item.organization}
              </th>
              <td className="px-4 py-4">{item.username}</td>
              <td className="px-4 py-4">{item.email}</td>
              <td className="px-4 py-4">{item.phone}</td>
              <td className="px-4 py-4">{item.createdAt}</td>
              <td className="px-4 py-4">{item.status}</td>
              <td className="px-4 py-4 text-right">
                <Icons.LendqsrMore className="cursor-pointer"/>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
