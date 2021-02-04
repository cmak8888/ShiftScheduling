package scheduler.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import scheduler.models.Availability;
import scheduler.models.User;
import scheduler.repo.UserRepo;

@Service
public class UserService {

	@Autowired
	private UserRepo userRepo;

	public UserService(UserRepo userRepo) {
		super();
		this.userRepo = userRepo;
	}
	
	public boolean insertUser(User user) {
		Availability availability = new Availability(user);
		user.setAvailability(availability);
		return userRepo.insertUser(user);
	}
	
	public boolean checkEmail(String email) {
		List<User> userList = userRepo.getAllUsers();
		for(User user: userList) {
			if(user.getEmail().equals(email)) {
				return false;
			}
		}
		return true;
	}
	
	public User getUserById(int id) {
		return userRepo.getUserById(id);
	}
	
	public List<User> getAllUsers() {
		return userRepo.getAllUsers();
	}
	
	public User getByCredentials(String email, String password) {
		return userRepo.getByCredentials(email, password);
	}
	
	public boolean updateUser(User user) {
		return userRepo.updateUser(user);
	}

	public boolean deleteUser(int id) {
		return userRepo.deleteUser(userRepo.getUserById(id));
	}
}
