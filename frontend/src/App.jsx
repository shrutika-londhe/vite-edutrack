// import React from "react";
import AttendanceForm from "./components/attendance/Attendance";
// import CourseOutcome from "./components/co-po/Co";
// import PracticalOutcome from "./components/co-po/Po";
import { Container,  } from "@mui/material";
import ResultAnalysis from "./components/result-analysis/ResultAnalysis";
import CourseOutcome from "./components/co-po/Co";

function App() {
  return (
    <Container>
      <CourseOutcome/>
      <AttendanceForm/>
      {/* <ResultAnalysis/> */}
    </Container>
  );
}

export default App;

// import  { useEffect, useState } from "react";
// import { fetchData } from "./config/api";
// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetchData().then((data) => setMessage(data));
//   }, []);

//   return <h1>{message}</h1>;
// }

// export default App;