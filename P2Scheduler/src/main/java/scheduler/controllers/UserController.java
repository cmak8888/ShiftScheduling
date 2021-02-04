package scheduler.controllers;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import scheduler.models.User;
import scheduler.service.UserService;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true")
public class UserController {

	@Autowired
	private UserService userService;

	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@GetMapping(value = "/user", params = {"id"})
	public User getUserById(HttpServletRequest req, HttpServletResponse resp, int id) {
		resp.setStatus(200);
		return userService.getUserById(id);
	}
	
	@GetMapping(value = "/all-users")
	public List<User> getAllUsers(HttpServletRequest req, HttpServletResponse resp) {
		resp.setStatus(200);
		return userService.getAllUsers();
	}
	
	@PostMapping(value = "/signup")
	public Map<String, String> signup(HttpServletRequest req, HttpServletResponse resp, @RequestBody() User user) {
		if(userService.checkEmail(user.getEmail())) {
			if(userService.insertUser(user)) {
				resp.setStatus(200);
				return Collections.singletonMap("response", "Sign up successful!");
			} else {
				resp.setStatus(500);
				return Collections.singletonMap("response", "Failed to create account");
			}
		} else {
			resp.setStatus(400);
			return Collections.singletonMap("response", "Email taken");
		}
	}
	
	@PostMapping(value = "/login")
	public User login(HttpServletRequest req, HttpServletResponse resp, @RequestBody() User user) {
		user = userService.getByCredentials(user.getEmail(), user.getPassword());
		
		if(user != null) {
			HttpSession session = req.getSession();
			session.setAttribute("user_id", user.getId());
			
			resp.setStatus(200);
			
			return user;
		}
		
		resp.setStatus(400);
		return null;
	}
	
	@PostMapping(value = "/logout")
	public User logout(HttpServletRequest req, HttpServletResponse resp) {
		HttpSession session = req.getSession();
		session.invalidate();
		resp.setStatus(200);
		return null;
	}
	
	@PutMapping(value = "update-user")
	public User update(HttpServletRequest req, HttpServletResponse resp, @RequestBody() User user) {
		if(userService.updateUser(user)) {
			resp.setStatus(200);
			return user;
		} else {
			resp.setStatus(500);
			return null;
		}
	}
	
	@DeleteMapping(value = "delete-user", params = {"id"})
	public Map<String, String> delete(HttpServletRequest req, HttpServletResponse resp, int id) {
		if(userService.deleteUser(id)) {
			resp.setStatus(200);
			return Collections.singletonMap("response", "Delete successful!");
		} else {
			resp.setStatus(500);
			return Collections.singletonMap("response", "Failed to delete account");
		}
	}

}
