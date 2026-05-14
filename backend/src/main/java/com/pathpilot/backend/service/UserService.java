package com.pathpilot.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.pathpilot.backend.entity.User;
import com.pathpilot.backend.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }
}