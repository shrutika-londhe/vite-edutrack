
import {  Toolbar, Drawer, List, ListItem, ListItemText, Container, Typography, Avatar, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useState } from 'react';

const menuItems = [
  'Course Outcome',
  'Course Planning',
  'Attendance',
  'Leave Management',
  'Result Analysis',
  'Feedback'
];

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(menuItems[0]);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Drawer variant="permanent" anchor="left" sx={{ width: 240, flexShrink: 0 }}>
        <Toolbar />
        <div style={{ padding: 16, textAlign: 'center' }}>
          <Avatar src='/profile.jpg' alt='Profile' sx={{ width: 80, height: 80, margin: 'auto' }} />
          <Typography variant='h6'>John Doe</Typography>
          <Typography variant='body2' color='textSecondary'>Professor, Computer Science</Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item} onClick={() => setSelectedTab(item)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Container sx={{ marginLeft: 30, padding: 3 }}>
        <Typography variant='h5' gutterBottom>{selectedTab}</Typography>
        {selectedTab === 'Course Outcome' && (
          <>
            <Typography variant='h6'>Course Outcomes</Typography>
            <ul>
              <li>Understanding Basics</li>
              <li>Advanced Concepts</li>
            </ul>
            <Typography variant='h6'>Practical List</Typography>
            <ul>
              <li>Setup Environment</li>
              <li>Implement Basic Logic</li>
            </ul>
          </>
        )}
        {selectedTab === 'Course Planning' && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Lecture Topic</TableCell>
                  <TableCell>Practical</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>2025-02-20</TableCell>
                  <TableCell>Introduction to Course</TableCell>
                  <TableCell>Setup Environment</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {selectedTab === 'Attendance' && (
          <>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Student Name</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell><input type='checkbox' /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Button variant='contained' sx={{ marginTop: 2 }}>Submit Attendance</Button>
          </>
        )}
        {selectedTab === 'Leave Management' && (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Reason</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>2025-02-15</TableCell>
                  <TableCell>Sick Leave</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {selectedTab === 'Result Analysis' && (
          <ul>
            <li>Class Test 1: Average Score - 75%</li>
            <li>Class Test 2: Average Score - 80%</li>
            <li>Mid Semester: Average Score - 78%</li>
          </ul>
        )}
        {selectedTab === 'Feedback' && (
          <>
            <TextField fullWidth multiline rows={4} placeholder='Enter feedback here...' sx={{ marginBottom: 2 }} />
            <Button variant='contained'>Submit Feedback</Button>
          </>
        )}
      </Container>
    </div>
  );
};

export default Dashboard;
