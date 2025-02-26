package com.edu.edutrack.repositories;


import com.edu.edutrack.models.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
