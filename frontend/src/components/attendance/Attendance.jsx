import { useState, useEffect } from "react";
import {
  Container,
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";

const AttendanceForm = () => {
  const [attendance, setAttendance] = useState({
    rollNo: "",
    prnNo: "",
    name: "",
    date: new Date().toISOString().split("T")[0],
    present: false,
  });

  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchAttendance();
  }, []);

  const fetchAttendance = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/attendance");
      setRecords(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching attendance records:", error);
    }
  };

  const handleChange = (e) => {
    setAttendance({ ...attendance, [e.target.name]: e.target.value });
  };

  const handleSwitch = (e) => {
    setAttendance({ ...attendance, present: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/attendance", attendance);
      fetchAttendance(); 
      setAttendance({
        rollNo: "",
        prnNo: "",
        name: "",
        date: new Date().toISOString().split("T")[0],
        present: false,
      });
    } catch (error) {
      console.error("Error submitting attendance:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Attendance Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Roll No"
          name="rollNo"
          value={attendance.rollNo}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="PRN No"
          name="prnNo"
          value={attendance.prnNo}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Name"
          name="name"
          value={attendance.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={attendance.date}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <FormControlLabel
          control={<Switch checked={attendance.present} onChange={handleSwitch} />}
          label="Present"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>

      <Typography variant="h5" style={{ marginTop: "20px" }}>
        Attendance Records
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Roll No</TableCell>
              <TableCell>PRN No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Present</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.length > 0 ? (
              records.map((record) => (
                <TableRow key={record.id}>
                  <TableCell>{record.rollNo}</TableCell>
                  <TableCell>{record.prnNo}</TableCell>
                  <TableCell>{record.name}</TableCell>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.present ? "Yes" : "No"}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default AttendanceForm;
