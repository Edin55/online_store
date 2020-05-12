package com.edinelezi.onlinestore.service.impl;

import com.edinelezi.onlinestore.model.security.User;
import com.edinelezi.onlinestore.repository.UserRepository;
import com.edinelezi.onlinestore.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UsersServiceImpl implements UsersService {

    @Autowired
    UserRepository userRepository;

    @Override
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User findById(Long id) {
        return userRepository.findUserById(id);
    }

}
