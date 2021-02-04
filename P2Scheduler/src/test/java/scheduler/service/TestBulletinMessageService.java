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

import scheduler.models.BulletinMessage;
import scheduler.models.Position;
import scheduler.models.User;
import scheduler.repo.BulletinMessageRepoImplementation;
import scheduler.repo.BulletinMessageRepo;

public class TestBulletinMessageService {
	
	static BulletinMessageService bulletinMessageService;
	
	@Mock
	static BulletinMessageRepo bulletinMessageRepo;
	
	static List<BulletinMessage> bulletinMessageList = new ArrayList<>();
	static BulletinMessage bulletinMessage1 = new BulletinMessage(1, new User(), "New Message", new Date(), null);
	static BulletinMessage bulletinMessage2 = new BulletinMessage(2, new User(), "New Message 2", new Date(), new Position());

	@Before
	public void setUp() {
		bulletinMessageRepo = Mockito.mock(BulletinMessageRepoImplementation.class);
		bulletinMessageService = new BulletinMessageService(bulletinMessageRepo);
		
		bulletinMessageList.add(bulletinMessage1);
		bulletinMessageList.add(bulletinMessage2);
		
		Mockito.when(bulletinMessageRepo.insertBulletinMessage(bulletinMessage1)).thenReturn(true);
		Mockito.when(bulletinMessageRepo.updateBulletinMessage(bulletinMessage1)).thenReturn(true);
		Mockito.when(bulletinMessageRepo.deleteBulletinMessage(bulletinMessage1)).thenReturn(true);
		Mockito.when(bulletinMessageRepo.getBulletinMessageById(1)).thenReturn(bulletinMessage1);
		Mockito.when(bulletinMessageRepo.getByUser(1)).thenReturn(bulletinMessageList);
		Mockito.when(bulletinMessageRepo.getByPosition(1)).thenReturn(bulletinMessageList);
		Mockito.when(bulletinMessageRepo.getAllBulletinMessages()).thenReturn(bulletinMessageList);
	}
	
	@Test
	public void testInsertBulletinMessage() {
		assertTrue(bulletinMessageService.insertBulletinMessage(bulletinMessage1));
	}
	
	@Test
	public void testUpdateBulletinMessage() {
		assertTrue(bulletinMessageService.updateBulletinMessage(bulletinMessage1));
	}
	
	@Test
	public void testDeleteBulletinMessage() {
		assertTrue(bulletinMessageService.deleteBulletinMessage(1));
	}
	
	@Test
	public void testGetBulletinMessageById() {
		assertEquals(bulletinMessage1, bulletinMessageService.getBulletinMessageById(1));
	}
	
	@Test
	public void testGetBulletinMessageByUser() {
		assertEquals(bulletinMessageList, bulletinMessageService.getBulletinMessageByUser(1));
	}
	
	@Test
	public void testGetBulletinMessageByPosition() {
		assertEquals(bulletinMessageList, bulletinMessageService.getBulletinMessageByPosition(1));
	}
	
	@Test
	public void testGetAllBulletinMessage() {
		assertEquals(bulletinMessageList, bulletinMessageService.getAllBulletinMessage());
	}
	
}
