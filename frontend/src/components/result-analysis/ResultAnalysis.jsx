import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from "@mui/material";

const ResultAnalysis = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/students").then((response) => {
      setStudents(response.data);
    });
  }, []);

  const handleChange = (index, field, value) => {
    const updatedStudents = [...students];
    updatedStudents[index][field] = value;
    setStudents(updatedStudents);
  };

  const addStudent = () => {
    const newStudent = { rollNo: "", prnNo: "", name: "", ct1: "", midSem: "", ct2: "", endSem: "" };
    axios.post("http://localhost:8080/students", newStudent).then((response) => {
      setStudents([...students, response.data]);
    });
  };

  const updateStudent = (index) => {
    axios.put(`http://localhost:8080/students/${students[index].id}`, students[index]);
  };

  return (
    <Container>
      <h2>Result Analysis</h2>
      <Button variant="contained" color="primary" onClick={addStudent}>
        Add Student
      </Button>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Roll No.</TableCell>
              <TableCell>PRN No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Class Test 1</TableCell>
              <TableCell>Mid Sem</TableCell>
              <TableCell>Class Test 2</TableCell>
              <TableCell>End Sem</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                {Object.keys(student).map((field) => (
                  field !== "id" && (
                    <TableCell key={field}>
                      <TextField
                        variant="outlined"
                        size="small"
                        value={student[field]}
                        onChange={(e) => handleChange(index, field, e.target.value)}
                      />
                    </TableCell>
                  )
                ))}
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => updateStudent(index)}>
                    Save
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ResultAnalysis;