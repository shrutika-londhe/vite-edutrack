package com.edu.edutrack.models;


import jakarta.persistence.*;

@Entity
@Table(name = "students")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String rollNo;
    private String prnNo;
    private String name;
    private Integer classTest1;
    private Integer midSem;
    private Integer classTest2;
    private Integer endSem;

    // Getters and Setters
}
