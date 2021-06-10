package com.dhimitrisprojects.ppmtool.services;

import com.dhimitrisprojects.ppmtool.domain.User;
import com.dhimitrisprojects.ppmtool.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public User saveUser(User newUser){
        newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
        //username is unique(exception)
        //make sure that password and confirmPassword match
        //we dont persist or show the confirmPassword
        return userRepository.save(newUser);
    }
}
