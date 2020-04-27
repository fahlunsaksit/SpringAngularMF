package com.saksit.test.controller;

import com.saksit.test.model.User;
import com.saksit.test.repository.UserRepo;
import com.saksit.test.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin()
public class UserController {
    @Autowired
    private UserService userService;

//    @PostMapping("")
//    public ResponseEntity<?>

    @GetMapping("/all")
    public Iterable<User> getAll(){
        return userService.findAll();

    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        User user = userService.findById(id);
        return new ResponseEntity<User>(user,HttpStatus.OK);

    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id ,@RequestBody User userDetails){
        User user = userService.findById(id);
        user.setUsername(userDetails.getUsername());
        user.setPassword(userDetails.getPassword());
        User updateUser = userService.saveUser(user);
        return new ResponseEntity<User>(updateUser,HttpStatus.OK);
    }

    @PostMapping("/addUser")
    public ResponseEntity<?> addUser(@RequestBody User user){
        User newUser = userService.saveUser(user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        userService.delete(id);
        return new ResponseEntity<String>("User deleted success",HttpStatus.OK);
    }


}
