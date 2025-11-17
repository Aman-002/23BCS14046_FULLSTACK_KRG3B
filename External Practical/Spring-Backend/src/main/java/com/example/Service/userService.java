package com.example.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Entity.User;
import com.example.Repository.userRepository;

@Service
public class userService {
	
	@Autowired
	public userRepository user_repository;
	
	  public User saveUser(User user) {
	        try {
				return user_repository.save(user);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return user;
	    }


}
