package com.edu.edutrack.controllers;

import com.edu.edutrack.models.*;
import com.edu.edutrack.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5137") // Allow frontend to access backend
@RestController
@RequestMapping("/api/attendance")
public class AttendanceController {

    @Autowired
    private AttendanceRepository attendanceRepository;

    // GET - Fetch all attendance records
    @GetMapping
    public List<Attendance> getAllAttendance() {
        return attendanceRepository.findAll();
    }

    // POST - Save new attendance record
    @PostMapping
    public Attendance addAttendance(@RequestBody Attendance attendance) {
        return attendanceRepository.save(attendance);
    }
}
