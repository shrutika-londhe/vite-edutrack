// import React from "react";
import { Container, Typography, List, ListItem, ListItemText, Paper } from "@mui/material";

const practicalOutcomes = [
  "Understand basic concepts of React.",
  "Build interactive UI using Material UI.",
  "Manage state effectively in React components.",
  "Integrate React with a backend API.",
];

const PracticalOutcome = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Practical Outcomes
      </Typography>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <List>
          {practicalOutcomes.map((outcome, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${index + 1}. ${outcome}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default PracticalOutcome;
