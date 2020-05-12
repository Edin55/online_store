package com.edinelezi.onlinestore.service;

import com.edinelezi.onlinestore.model.security.User;
import org.springframework.stereotype.Service;

@Service
public interface UsersService {
    User findByUsername(String username);

    User findByEmail (String email);

    User findById(Long id);

}
