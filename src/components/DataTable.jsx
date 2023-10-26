import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../api/fetchProfile";

import { Link } from "react-router-dom";
const DataTable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="flex gap-2">
            <Link to="/users/test">
              <div className="bg-green-200 p-1 rounded cursor-pointer hover:bg-green-500 duration-300">
                view
              </div>
            </Link>
            <div className="bg-red-300 p-1 rounded hover:bg-red-500 duration-300 cursor-pointer">
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>
      <div className="shadow-lg m-2 rounded p-1 flex justify-center">
        <Link
          to="/users/newpage"
          className="bg-blue-400 p-1 rounded hover:bg-blue-600 cursor-pointer"
        >
          Add New
        </Link>
      </div>
      <div
        style={{ height: 400, width: "100%" }}
        className="flex justify-center items-center"
      >
        <DataGrid
          className="w-96"
          rows={userRows}
          columns={userColumns.concat(actionColumn)}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
};

export default DataTable;
