package scheduler.repo;

import java.util.List;

import scheduler.models.Message;

public interface MessageRepo {
	public boolean insertMessage(Message message);
	public Message getMessageById(int id);
	public List<Message> getAllMessages();
	public List<Message> getBySender(int messageId);
	public List<Message> getByReciever(int messageId);
	public List<Message> getBySenderAndReciever(int senderId, int recieverId);
	public boolean updateMessage(Message message);
	public boolean deleteMessage(Message message);
}
