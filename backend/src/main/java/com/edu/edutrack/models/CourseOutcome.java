package com.edu.edutrack.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class CourseOutcome {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int srNo;
    private String courseOutcome;
    private String unitName;
}
