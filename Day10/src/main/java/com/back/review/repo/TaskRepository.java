package com.back.review.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.back.review.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

}