package com.edu.edutrack.service;

import com.edu.edutrack.models.*;
import com.edu.edutrack.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StudentService {

    @Autowired
    private StudentRepository studentRepository;

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public Student updateStudent(Long id, Student student) {
        Student existing = studentRepository.findById(id).orElseThrow();
        existing.setRollNo(student.getRollNo());
        existing.setPrnNo(student.getPrnNo());
        existing.setName(student.getName());
        existing.setClassTest1(student.getClassTest1());
        existing.setMidSem(student.getMidSem());
        existing.setClassTest2(student.getClassTest2());
        existing.setEndSem(student.getEndSem());
        return studentRepository.save(existing);
    }
}
