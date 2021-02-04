package scheduler.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;

import scheduler.models.Schedule;
import scheduler.repo.ScheduleRepo;
import scheduler.repo.ScheduleRepoImplementation;

public class TestScheduleService {

static ScheduleService scheduleService;
	
	@Mock
	static ScheduleRepo scheduleRepo;
	
	static List<Schedule> scheduleList = new ArrayList<>();
	static Schedule schedule1 = new Schedule(1, new Date(), true);
	static Schedule schedule2 = new Schedule(2, new Date(), false);

	@Before
	public void setUp() {
		scheduleRepo = Mockito.mock(ScheduleRepoImplementation.class);
		scheduleService = new ScheduleService(scheduleRepo);
		
		scheduleList.add(schedule1);
		scheduleList.add(schedule2);
		
		Mockito.when(scheduleRepo.insertSchedule(schedule1)).thenReturn(true);
		Mockito.when(scheduleRepo.updateSchedule(schedule1)).thenReturn(true);
		Mockito.when(scheduleRepo.deleteSchedule(schedule1)).thenReturn(true);
		Mockito.when(scheduleRepo.getScheduleById(1)).thenReturn(schedule1);
		Mockito.when(scheduleRepo.getAllActiveSchedules()).thenReturn(scheduleList);
		Mockito.when(scheduleRepo.getAllSchedules()).thenReturn(scheduleList);
	}
	
	@Test
	public void testInsertSchedule() {
		assertTrue(scheduleService.insertSchedule(schedule1));
	}
	
	@Test
	public void testUpdateSchedule() {
		assertTrue(scheduleService.updateSchedule(schedule1));
	}
	
	@Test
	public void testDeleteSchedule() {
		assertTrue(scheduleService.deleteSchedule(1));
	}
	
	@Test
	public void testGetScheduleById() {
		assertEquals(schedule1, scheduleService.getScheduleById(1));
	}
	
	@Test
	public void testGetAllActiveSchedule() {
		assertEquals(scheduleList, scheduleService.getAllActiveSchedule());
	}
	
	@Test
	public void testGetAllSchedule() {
		assertEquals(scheduleList, scheduleService.getAllSchedule());
	}
	
}
