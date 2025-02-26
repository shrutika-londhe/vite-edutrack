package com.edu.edutrack.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173") // Allow React frontend requests
@RestController
@RequestMapping("/api")
public class YourController {
    @GetMapping("/data")
    public String getData() {
        return "Hello from Backend!";
    }
}

