package scheduler.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;

import scheduler.models.Availability;
import scheduler.models.User;
import scheduler.repo.UserRepo;
import scheduler.repo.UserRepoImplementation;

public class TestUserService {

static UserService userService;
	
	@Mock
	static UserRepo userRepo;
	
	static List<User> userList = new ArrayList<>();
	static User user1 = new User(1, "John", "Doe", "johndoe@gmail.com", "pass", true, "1234567890", new Availability());
	static User user2 = new User(2, "Bob", "Baker", "bobbaker@gmail.com", "pass", false);

	@Before
	public void setUp() {
		userRepo = Mockito.mock(UserRepoImplementation.class);
		userService = new UserService(userRepo);
		
		userList.add(user1);
		userList.add(user2);
		
		Mockito.when(userRepo.insertUser(user2)).thenReturn(true);
		Mockito.when(userRepo.updateUser(user1)).thenReturn(true);
		Mockito.when(userRepo.deleteUser(user1)).thenReturn(true);
		Mockito.when(userRepo.getUserById(1)).thenReturn(user1);
		Mockito.when(userRepo.getByCredentials("johndoe@gmail.com", "pass")).thenReturn(user1);
		Mockito.when(userRepo.getAllUsers()).thenReturn(userList);
	}
	
	@Test
	public void testInsertUser() {
		assertTrue(userService.insertUser(user2));
	}
	
	@Test
	public void testUpdateUser() {
		assertTrue(userService.updateUser(user1));
	}
	
	@Test
	public void testDeleteUser() {
		assertTrue(userService.deleteUser(1));
	}
	
	@Test
	public void testGetUserById() {
		assertEquals(user1, userService.getUserById(1));
	}
	
	@Test
	public void testGetByCredentials() {
		assertEquals(user1, userService.getByCredentials("johndoe@gmail.com", "pass"));
	}
	
	@Test
	public void testGetAllUser() {
		assertEquals(userList, userService.getAllUsers());
	}
	
	@Test
	public void testCheckEmail() {
		assertTrue(userService.checkEmail("fakeyfake@gmail.com"));
	}
	
}
