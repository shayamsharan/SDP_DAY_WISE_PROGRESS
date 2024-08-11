package com.example._4.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example._4.demo.model.Users;
import com.example._4.demo.repo.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo ur;

    public List<Users> getUsers() {
        return ur.findAll();
    }
    // findAll() method----> ORM executed ---> select * from Users;

    public Users addUsers(Users user) {
        return ur.save(user);
    }

    public String deleteUser(Long uid) {
        ur.deleteById(uid);
        return "User Deleted " + uid;
    }

}