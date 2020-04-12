package com.edinelezi.onlinestore.service.impl;

import com.edinelezi.onlinestore.model.User;
import com.edinelezi.onlinestore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserSecurityService{

    @Autowired
    private UserRepository userRepository;


    public User loadUserByUsername(String username) throws Exception{
        User user = userRepository.findByUsername(username);
        if(user == null){
            throw new Exception("Username not found");
        }
        return user;
    }

}
