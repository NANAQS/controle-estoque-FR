import React, { useState, useRef } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TextField,
  TablePagination,
  Box,
  InputAdornment,
} from "@mui/material";
import { Search } from "@mui/icons-material";

interface TableProps {
  tableHeader: string[];
  tableData: any[][];
}

const DynamicTable: React.FC<TableProps> = ({ tableHeader, tableData }) => {
  const [windowWidth, _] = useState(window.innerWidth);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const tableRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleChangePage = (_: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = tableData.filter((row) =>
    row.some((cell) => {
      if (typeof cell === "string") {
        return cell.toLowerCase().includes(searchText.toLowerCase());
      }
      return false;
    })
  );

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setScrollLeft(event.currentTarget.scrollLeft);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(event.clientX - tableRef.current!.offsetLeft);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    event.preventDefault();
    const x = event.clientX - tableRef.current!.offsetLeft;
    const walk = (x - startX) * 3;
    tableRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        label="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        sx={{ m: 2, width: "100%" }}
      />
      <Paper
        sx={{
          maxWidth: windowWidth / 1.5,
          overflowX: "auto",
        }}
        onScroll={handleScroll}
        ref={tableRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ minWidth: "100%" }}>
          <Table style={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                {tableHeader.map((header, index) => (
                  <TableCell key={index}>{header}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((row, index) => (
                <TableRow key={index}>
                  {row.map((cell, cellIndex) => (
                    <TableCell key={cellIndex}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Paper>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default DynamicTable;
