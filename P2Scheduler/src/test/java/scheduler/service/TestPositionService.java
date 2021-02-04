package scheduler.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.Mockito;

import scheduler.models.Position;
import scheduler.repo.PositionRepo;
import scheduler.repo.PositionRepoImplementation;

public class TestPositionService {

static PositionService positionService;
	
	@Mock
	static PositionRepo positionRepo;
	
	static List<Position> positionList = new ArrayList<>();
	static Position position1 = new Position(1, "Cashier");
	static Position position2 = new Position(2, "Janitor");

	@Before
	public void setUp() {
		positionRepo = Mockito.mock(PositionRepoImplementation.class);
		positionService = new PositionService(positionRepo);
		
		positionList.add(position1);
		positionList.add(position2);
		
		Mockito.when(positionRepo.insertPosition(position1)).thenReturn(true);
		Mockito.when(positionRepo.updatePosition(position1)).thenReturn(true);
		Mockito.when(positionRepo.deletePosition(position1)).thenReturn(true);
		Mockito.when(positionRepo.getPositionById(1)).thenReturn(position1);
		Mockito.when(positionRepo.getAllPositions()).thenReturn(positionList);
	}
	
	@Test
	public void testInsertPosition() {
		assertTrue(positionService.insertPosition(position1));
	}
	
	@Test
	public void testUpdatePosition() {
		assertTrue(positionService.updatePosition(position1));
	}
	
	@Test
	public void testDeletePosition() {
		assertTrue(positionService.deletePosition(1));
	}
	
	@Test
	public void testGetPositionById() {
		assertEquals(position1, positionService.getPositionById(1));
	}
	
	@Test
	public void testGetAllPosition() {
		assertEquals(positionList, positionService.getAllPosition());
	}
	
}
