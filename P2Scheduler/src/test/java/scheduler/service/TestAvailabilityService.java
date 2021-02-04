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
import scheduler.repo.AvailabilityRepo;
import scheduler.repo.AvailabilityRepoImplementation;

public class TestAvailabilityService {
	
	static AvailabilityService availabilityService;
	
	@Mock
	static AvailabilityRepo availabilityRepo;
	
	static List<Availability> availabilityList = new ArrayList<>();
	static Availability availability1 = new Availability(1, new User(), true, true, true, true, true, false, false);
	static Availability availability2 = new Availability(2, new User(), false, false, false, false, false, false, false);
	
	@Before
	public void setUp() {
		availabilityRepo = Mockito.mock(AvailabilityRepoImplementation.class);
		availabilityService = new AvailabilityService(availabilityRepo);
		
		availabilityList.add(availability1);
		availabilityList.add(availability2);
		
		Mockito.when(availabilityRepo.insertAvailability(availability1)).thenReturn(true);
		Mockito.when(availabilityRepo.updateAvailability(availability1)).thenReturn(true);
		Mockito.when(availabilityRepo.deleteAvailability(availability1)).thenReturn(true);
		Mockito.when(availabilityRepo.getAvailabilityById(1)).thenReturn(availability1);
		Mockito.when(availabilityRepo.getAllAvailabilities()).thenReturn(availabilityList);
	}
	
	@Test
	public void testInsertAvailability() {
		assertTrue(availabilityService.insertAvailability(availability1));
	}
	
	@Test
	public void testUpdateAvailability() {
		assertTrue(availabilityService.updateAvailability(availability1));
	}
	
	@Test
	public void testDeleteAvailability() {
		assertTrue(availabilityService.deleteAvailability(1));
	}
	
	@Test
	public void testGetAvailabilityById() {
		assertEquals(availability1, availabilityService.getAvailabilityById(1));
	}
	
	@Test
	public void testGetAllAvailabilities() {
		assertEquals(availabilityList, availabilityService.getAllAvailability());
	}

}
