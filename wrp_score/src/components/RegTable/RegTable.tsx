import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// First name
// Last name
// Gender
// Birth year
// Body weight
// Class - automatically

function createData(
  lifter: string,
  gender: string,
  birthYear: string,
  bodyWeight: number,
  assignedClass: string
) {
  return { lifter, gender, birthYear, bodyWeight, assignedClass };
}

const rows = [
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
  createData("Frozen yoghurt", "Male", "27", 89, "LTU"),
];

const RegTable = () => {
  return (
    <TableContainer sx={{ mt: 2, overflowX: "initial" }}>
      <Table stickyHeader aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Lifter</StyledTableCell>
            <StyledTableCell align="left">Gender</StyledTableCell>
            <StyledTableCell align="left">Year</StyledTableCell>
            <StyledTableCell align="left">Body Kg</StyledTableCell>
            <StyledTableCell align="left">Class</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.lifter}>
              <StyledTableCell component="th" scope="row">
                {row.lifter}
              </StyledTableCell>
              <StyledTableCell align="left">{row.gender}</StyledTableCell>
              <StyledTableCell align="left">{row.birthYear}</StyledTableCell>
              <StyledTableCell align="left">{row.bodyWeight}</StyledTableCell>
              <StyledTableCell align="left">
                {row.assignedClass}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RegTable;
