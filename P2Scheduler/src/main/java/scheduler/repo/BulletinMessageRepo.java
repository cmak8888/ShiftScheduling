package scheduler.repo;

import java.util.List;

import scheduler.models.BulletinMessage;

public interface BulletinMessageRepo {
	public boolean insertBulletinMessage(BulletinMessage bulletinmessage);
	public BulletinMessage getBulletinMessageById(int id);
	public List<BulletinMessage> getAllBulletinMessages();
	public List<BulletinMessage> getByUser(int userId);
	public List<BulletinMessage> getByPosition(int positionId);
	public boolean updateBulletinMessage(BulletinMessage bulletinmessage);
	public boolean deleteBulletinMessage(BulletinMessage bulletinmessage);
}
