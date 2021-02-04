package scheduler.repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import scheduler.models.User;

@Repository("UserRepo")
@Transactional
public class UserRepoImplementation implements UserRepo{

	@Autowired
	private SessionFactory sesFact;
	
	public UserRepoImplementation(SessionFactory sesFact) {
		super();
		this.sesFact = sesFact;
	}
	
	@Override
	public boolean insertUser(User user) {
		try {
			sesFact.getCurrentSession().save(user);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public User getUserById(int id) {
		return sesFact.getCurrentSession().get(User.class, id);
	}

	@Override
	public List<User> getAllUsers() {
		return sesFact.getCurrentSession().createQuery("from User", User.class).list();
	}

	@Override
	public User getByCredentials(String email, String password) {
		List<User> userList;
		userList = sesFact.getCurrentSession().createQuery("FROM User WHERE email = :email AND password = :password", User.class)
				.setParameter("email", email)
				.setParameter("password", password).list();
		if(userList.size() >= 1) {
			return userList.get(0);
		}
		return null;
	}

	@Override
	public boolean updateUser(User user) {
		try {
			sesFact.getCurrentSession().update(user);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deleteUser(User user) {
		try {
			sesFact.getCurrentSession().delete(user);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
