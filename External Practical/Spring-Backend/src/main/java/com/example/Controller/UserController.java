package com.example.Controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entity.User;
import com.example.Service.userService;

@RestController
public class UserController {
	
	private userService user_service;
	
	
	@PostMapping(value="/posts")
	public User PostData(@RequestBody User user) {
		return user_service.saveUser(user);
	}
}
