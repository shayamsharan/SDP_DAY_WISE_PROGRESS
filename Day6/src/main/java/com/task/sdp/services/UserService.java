package com.task.sdp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.sdp.models.Users;
import com.task.sdp.repos.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo urepo;

    public List<Users> getUsers(){
return urepo.findAll();
    }
    public Users addUser(Users user){
return urepo.save(user);
    }
    public String editUser(Users user, String uid)
    {
        Users userx = urepo.findById(uid).orElse(null);
        if(userx!=null){
            urepo.save(user);
            return uid + " Updated ";
        }
        return "User Not Found";
    }
    public String deleteUser(String uid){
        urepo.deleteById(uid);
        return uid + " Deleted";

    }
}
