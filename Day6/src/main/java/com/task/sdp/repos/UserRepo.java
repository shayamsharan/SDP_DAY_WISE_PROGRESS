package com.task.sdp.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.task.sdp.models.Users;

public interface UserRepo extends JpaRepository<Users, String>{

}
