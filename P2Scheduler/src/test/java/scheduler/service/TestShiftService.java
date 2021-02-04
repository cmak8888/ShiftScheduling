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

import scheduler.models.Position;
import scheduler.models.Schedule;
import scheduler.models.Shift;
import scheduler.models.User;
import scheduler.repo.ShiftRepo;
import scheduler.repo.ShiftRepoImplementation;

public class TestShiftService {

static ShiftService shiftService;
	
	@Mock
	static ShiftRepo shiftRepo;
	
	static List<Shift> shiftList = new ArrayList<>();
	static Shift shift1 = new Shift(1, new User(), new Date(), new Date(), new Position(), new Schedule());
	static Shift shift2 = new Shift(2, new User(), new Date(), new Date(), new Position(), new Schedule());

	@Before
	public void setUp() {
		shiftRepo = Mockito.mock(ShiftRepoImplementation.class);
		shiftService = new ShiftService(shiftRepo);
		
		shiftList.add(shift1);
		shiftList.add(shift2);
		
		Mockito.when(shiftRepo.insertShift(shift1)).thenReturn(true);
		Mockito.when(shiftRepo.updateShift(shift1)).thenReturn(true);
		Mockito.when(shiftRepo.deleteShift(shift1)).thenReturn(true);
		Mockito.when(shiftRepo.getShiftById(1)).thenReturn(shift1);
		Mockito.when(shiftRepo.getBySchedule(1)).thenReturn(shiftList);
		Mockito.when(shiftRepo.getByUser(1)).thenReturn(shiftList);
		Mockito.when(shiftRepo.getByPosition(1)).thenReturn(shiftList);
		Mockito.when(shiftRepo.getAllShifts()).thenReturn(shiftList);
	}
	
	@Test
	public void testInsertShift() {
		assertTrue(shiftService.insertShift(shift1));
	}
	
	@Test
	public void testUpdateShift() {
		assertTrue(shiftService.updateShift(shift1));
	}
	
	@Test
	public void testDeleteShift() {
		assertTrue(shiftService.deleteShift(1));
	}
	
	@Test
	public void testGetShiftById() {
		assertEquals(shift1, shiftService.getShiftById(1));
	}
	
	@Test
	public void testGetShiftBySchedule() {
		assertEquals(shiftList, shiftService.getShiftBySchedule(1));
	}
	
	@Test
	public void testGetShiftByUser() {
		assertEquals(shiftList, shiftService.getShiftByUser(1));
	}
	
	@Test
	public void testGetShiftByPosition() {
		assertEquals(shiftList, shiftService.getShiftByPosition(1));
	}
	
	@Test
	public void testGetAllShift() {
		assertEquals(shiftList, shiftService.getAllShift());
	}
	
}
