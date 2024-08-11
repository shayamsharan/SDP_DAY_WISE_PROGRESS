package com.example._4.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example._4.demo.model.Users;
import com.example._4.demo.service.UserService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService us;

    @GetMapping("/getUsers")
    public List<Users> GetUsers() {
        return us.getUsers();
    }

    @PostMapping("/register")
    public Users AddUsers(@RequestBody Users user) {
        return us.addUsers(user);
    }

    @DeleteMapping("/deleteUser/{uid}")
    public String DeleteUser(@PathVariable Long uid) {
        return us.deleteUser(uid);
    }
}