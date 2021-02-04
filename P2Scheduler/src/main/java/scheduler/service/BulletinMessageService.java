package scheduler.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import scheduler.models.BulletinMessage;
import scheduler.repo.BulletinMessageRepo;
@Service
public class BulletinMessageService {
	
	@Autowired
	private BulletinMessageRepo bulletinMessageRepo;
	
	public BulletinMessageService(BulletinMessageRepo bulletinMessageRepo) {
		super();
		this.bulletinMessageRepo = bulletinMessageRepo;
	}
	
	public boolean insertBulletinMessage(BulletinMessage bulletinMessage) {
		return bulletinMessageRepo.insertBulletinMessage(bulletinMessage);
	}
	
	public boolean updateBulletinMessage(BulletinMessage bulletinMessage) {
		return bulletinMessageRepo.updateBulletinMessage(bulletinMessage);
	}
	
	public boolean deleteBulletinMessage(int id) {
		return bulletinMessageRepo.deleteBulletinMessage(bulletinMessageRepo.getBulletinMessageById(id));
	}
	
	public BulletinMessage getBulletinMessageById(int id) {
		return bulletinMessageRepo.getBulletinMessageById(id);
	}
	
	public List<BulletinMessage> getBulletinMessageByUser(int id) {
		return bulletinMessageRepo.getByUser(id);
	}
	
	public List<BulletinMessage> getBulletinMessageByPosition(int id) {
		return bulletinMessageRepo.getByPosition(id);
	}
		
	public List<BulletinMessage> getAllBulletinMessage() {
		return bulletinMessageRepo.getAllBulletinMessages();
	}
	
}
