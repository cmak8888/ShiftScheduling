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

import scheduler.models.Message;
import scheduler.models.User;
import scheduler.repo.MessageRepo;
import scheduler.repo.MessageRepoImplementation;

public class TestMessageService {

	static MessageService messageService;
	
	@Mock
	static MessageRepo messageRepo;
	
	static List<Message> messageList = new ArrayList<>();
	static Message message1 = new Message(1, new User(), "New Message", new Date(), new User());
	static Message message2 = new Message(2, new User(), "New Message 2", new Date(), new User());

	@Before
	public void setUp() {
		messageRepo = Mockito.mock(MessageRepoImplementation.class);
		messageService = new MessageService(messageRepo);
		
		messageList.add(message1);
		messageList.add(message2);
		
		Mockito.when(messageRepo.insertMessage(message1)).thenReturn(true);
		Mockito.when(messageRepo.updateMessage(message1)).thenReturn(true);
		Mockito.when(messageRepo.deleteMessage(message1)).thenReturn(true);
		Mockito.when(messageRepo.getMessageById(1)).thenReturn(message1);
		Mockito.when(messageRepo.getBySender(1)).thenReturn(messageList);
		Mockito.when(messageRepo.getByReciever(1)).thenReturn(messageList);
		Mockito.when(messageRepo.getBySenderAndReciever(1, 2)).thenReturn(messageList);
		Mockito.when(messageRepo.getAllMessages()).thenReturn(messageList);
	}
	
	@Test
	public void testInsertMessage() {
		assertTrue(messageService.insertMessage(message1));
	}
	
	@Test
	public void testUpdateMessage() {
		assertTrue(messageService.updateMessage(message1));
	}
	
	@Test
	public void testDeleteMessage() {
		assertTrue(messageService.deleteMessage(1));
	}
	
	@Test
	public void testGetMessageById() {
		assertEquals(message1, messageService.getMessageById(1));
	}
	
	@Test
	public void testGetMessageBySender() {
		assertEquals(messageList, messageService.getMessageBySender(1));
	}
	
	@Test
	public void testGetMessageByReciever() {
		assertEquals(messageList, messageService.getMessageByReciever(1));
	}
	
	@Test
	public void testGetMessageBySenderAndReciever() {
		assertEquals(messageList, messageService.getMessageBySenderAndReciever(1, 2));
	}
	
	@Test
	public void testGetAllMessage() {
		assertEquals(messageList, messageService.getAllMessage());
	}
	
}
