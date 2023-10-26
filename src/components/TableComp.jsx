import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const TableComp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  return (
    <div className="w-10/12 md:w-full">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Discount</TableCell>
              <TableCell>Category</TableCell>
              {/* <TableCell>Status</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{item.id}</TableCell>
                <Link to="/productpage">
                  <TableCell align="left">
                    <img
                      src={item.images[0]}
                      alt="Product"
                      className="w-20 h-15 scale-90 duration-300 hover:scale-100 border border-transparent hover:border hover:border-black cursor-pointer"
                    />
                  </TableCell>
                </Link>

                <TableCell align="left">{item.title}</TableCell>
                <TableCell align="left">{item.price}</TableCell>
                <TableCell align="left">{item.discountPercentage}</TableCell>
                <TableCell align="left">{item.category}</TableCell>
                {/* <TableCell align="left">{item.category}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComp;
