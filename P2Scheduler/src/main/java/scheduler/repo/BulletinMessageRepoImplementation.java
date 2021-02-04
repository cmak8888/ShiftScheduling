package scheduler.repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import scheduler.models.BulletinMessage;

@Repository("BulletinMessageRepo")
@Transactional
public class BulletinMessageRepoImplementation implements BulletinMessageRepo {

	public BulletinMessageRepoImplementation(SessionFactory sesFact) {
		super();
		this.sesFact = sesFact;
	}

	private SessionFactory sesFact;

	@Override
	public boolean insertBulletinMessage(BulletinMessage bulletinmessage) {
		try{ 
			sesFact.getCurrentSession().save(bulletinmessage);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public BulletinMessage getBulletinMessageById(int id) {
		return sesFact.getCurrentSession().get(BulletinMessage.class, id);
	}

	@Override
	public List<BulletinMessage> getAllBulletinMessages() {
		return sesFact.getCurrentSession().createQuery("from BulletinMessage b ORDER BY b.time ASC", BulletinMessage.class).list();
	}

	@Override
	public List<BulletinMessage> getByUser(int userId) {
		return sesFact.getCurrentSession().createQuery("from BulletinMessage b where user_id = :user_id ORDER BY b.time ASC", BulletinMessage.class)
				.setParameter("user_id", userId).list();
	}

	@Override
	public List<BulletinMessage> getByPosition(int positionId) {
		return sesFact.getCurrentSession().createQuery("from BulletinMessage b where position_id = :position_id ORDER BY b.time ASC", BulletinMessage.class)
				.setParameter("position_id", positionId).list();
	}

	@Override
	public boolean updateBulletinMessage(BulletinMessage bulletinmessage) {
		try{ 
			sesFact.getCurrentSession().update(bulletinmessage);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deleteBulletinMessage(BulletinMessage bulletinmessage) {
		try{ 
			sesFact.getCurrentSession().delete(bulletinmessage);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
