package com.back.review.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.back.review.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
