package com.back.review.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.back.review.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

}