package com.edu.edutrack.controllers;

import com.edu.edutrack.models.*;
import com.edu.edutrack.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/course-outcomes")
@CrossOrigin(origins = "http://localhost:5137")
public class CourseOutcomeController {

    @Autowired
    private CourseOutcomeRepository repository;

    @PostMapping
    public CourseOutcome saveCourseOutcome(@RequestBody CourseOutcome courseOutcome) {
        return repository.save(courseOutcome);
    }

    @GetMapping
    public List<CourseOutcome> getAllCourseOutcomes() {
        return repository.findAll();
    }
}
