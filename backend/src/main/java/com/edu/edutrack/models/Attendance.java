package com.edu.edutrack.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "attendance")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String rollNo;
    private String prnNo;
    private String name;
    private String date;
    private boolean present;
}
