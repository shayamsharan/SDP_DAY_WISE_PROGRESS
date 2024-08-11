package com.example._4.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example._4.demo.model.Users;

public interface UserRepo extends JpaRepository<Users, Long> {

}