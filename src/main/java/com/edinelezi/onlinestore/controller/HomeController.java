package com.edinelezi.onlinestore.controller;

import com.edinelezi.onlinestore.model.User;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(produces = MimeTypeUtils.APPLICATION_JSON_VALUE)

public class HomeController {
    @GetMapping("/login")
    public User user(){
        User user = new User("Edin55","Edin", "Elezi");
        return user;
    }
    @GetMapping("/hello")
    public String hello(){
        return "Hello World";
    }
}
