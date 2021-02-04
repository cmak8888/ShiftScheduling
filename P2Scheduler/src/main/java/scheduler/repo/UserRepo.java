package scheduler.repo;

import java.util.List;

import scheduler.models.User;

public interface UserRepo {
	public boolean insertUser(User user);
	public User getUserById(int id);
	public List<User> getAllUsers();
	public User getByCredentials(String email, String password);
	public boolean updateUser(User user);
	public boolean deleteUser(User user);
}
