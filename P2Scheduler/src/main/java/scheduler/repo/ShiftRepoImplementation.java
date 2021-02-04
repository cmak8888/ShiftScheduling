package scheduler.repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import scheduler.models.Shift;

@Repository("ShiftRepo")
@Transactional
public class ShiftRepoImplementation implements ShiftRepo{

	public ShiftRepoImplementation(SessionFactory sesFact) {
		super();
		this.sesFact = sesFact;
	}

	private SessionFactory sesFact;
	
	@Override
	public boolean insertShift(Shift shift) {
		try{ 
			sesFact.getCurrentSession().save(shift);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		
	}

	@Override
	public Shift getShiftById(int id) {
		return sesFact.getCurrentSession().get(Shift.class, id);
	}

	@Override
	public List<Shift> getAllShifts() {
		return sesFact.getCurrentSession().createQuery("from Shift", Shift.class).list();
	}

	@Override
	public List<Shift> getBySchedule(int schedule) {
		return sesFact.getCurrentSession().createQuery("from Shift where schedule_id = :schedule_id", Shift.class)
				.setParameter("schedule_id", schedule).list();
	}

	@Override
	public List<Shift> getByUser(int userId) {
		return sesFact.getCurrentSession().createQuery("from Shift where user_id = :user_id", Shift.class)
				.setParameter("user_id", userId).list();
	}

	@Override
	public List<Shift> getByPosition(int positionId) {
		return sesFact.getCurrentSession().createQuery("from Shift where position_id = :position_id", Shift.class)
				.setParameter("position_id", positionId).list();
	}

	@Override
	public boolean updateShift(Shift shift) {
		try{ 
			sesFact.getCurrentSession().update(shift);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deleteShift(Shift shift) {
		try{ 
			sesFact.getCurrentSession().delete(shift);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
