package com.edu.edutrack.repositories;

import com.edu.edutrack.models.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
}
