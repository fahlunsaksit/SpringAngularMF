package com.saksit.test.service;

import com.saksit.test.model.User;
import com.saksit.test.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public User saveUser(User user){
        return userRepo.save(user);
    }

    public Iterable<User> findAll(){
        return userRepo.findAll();
    }

    public User findById(Long id){
        return userRepo.getById(id);
    }

    public void delete(Long id){
        User user = findById(id);
        userRepo.delete(user);
    }
}
