import { useState, useEffect } from "react";
import { TextField, Button, Container, Typography, Grid2} from "@mui/material";
import axios from "axios";
import CourseOutcomeTable from "./CourseOutcomeTable";

const CourseOutcome = () => {
  const [formData, setFormData] = useState({
    srNo: "",
    courseOutcome: "",
    unitName: "",
  });

  const [courseOutcomes, setCourseOutcomes] = useState([]);

  const fetchCourseOutcomes = async () => {
    const response = await axios.get("http://localhost:8080/api/course-outcomes");
    setCourseOutcomes(response.data);
  };

  useEffect(() => {
    fetchCourseOutcomes();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post("http://localhost:8080/api/course-outcomes", formData);
    setFormData({ srNo: "", courseOutcome: "", unitName: "" });
    fetchCourseOutcomes();
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5" gutterBottom>
        Course Outcome Entry
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 item xs={4}>
          <TextField label="Sr No." variant="outlined" fullWidth name="srNo" value={formData.srNo} onChange={handleChange} />
        </Grid2>
        <Grid2 item xs={4}>
          <TextField label="Course Outcome" variant="outlined" fullWidth name="courseOutcome" value={formData.courseOutcome} onChange={handleChange} />
        </Grid2>
        <Grid2 item xs={4}>
          <TextField label="Unit Name" variant="outlined" fullWidth name="unitName" value={formData.unitName} onChange={handleChange} />
        </Grid2>
        <Grid2 item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </Grid2>
      </Grid2>

      <CourseOutcomeTable data={courseOutcomes} />
    </Container>
  );
};

export default CourseOutcome;
