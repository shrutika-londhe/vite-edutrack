import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const CourseOutcomeTable = ({ data = [] }) => {
  // Ensure data is always an array to prevent `map` errors
  if (!Array.isArray(data)) {
    console.error('Invalid data received in CourseOutcomeTable:', data);
    return <p>No data available</p>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sr No.</TableCell>
            <TableCell>Course Outcome</TableCell>
            <TableCell>Unit Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data.map((row, index) => (
              <TableRow key={row.id || index}>
                <TableCell>{row.srNo}</TableCell>
                <TableCell>{row.courseOutcome}</TableCell>
                <TableCell>{row.unitName}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourseOutcomeTable;
