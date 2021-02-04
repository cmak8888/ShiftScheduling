package scheduler.repo;

import java.util.Date;
import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import scheduler.models.Schedule;

@Repository("ScheduleRepo")
@Transactional
public class ScheduleRepoImplementation implements ScheduleRepo{

	public ScheduleRepoImplementation(SessionFactory sesFact) {
		super();
		this.sesFact = sesFact;
	}

	private SessionFactory sesFact;
	
	@Override
	public boolean insertSchedule(Schedule schedule) {
		try{ 
			sesFact.getCurrentSession().save(schedule);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		
	}

	@Override
	public Schedule getScheduleById(int id) {
		return sesFact.getCurrentSession().get(Schedule.class, id);
	}

	@Override
	public List<Schedule> getAllSchedules() {
		return sesFact.getCurrentSession().createQuery("from Schedule s ORDER BY s.startDate ASC", Schedule.class).list();
	}

	@Override
	public boolean updateSchedule(Schedule schedule) {
		try{ 
			sesFact.getCurrentSession().update(schedule);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deleteSchedule(Schedule schedule) {
		try{ 
			sesFact.getCurrentSession().delete(schedule);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public Schedule getScheduleByDate(Date startDate) {
		List<Schedule> schedule = sesFact.getCurrentSession().createQuery("from Schedule where schedule_date = :schedule_date", Schedule.class)
				.setParameter("schedule_date", startDate).list();
		if(schedule.size() > 0)
			return schedule.get(0);
		else
			return null;
	}

	@Override
	public List<Schedule> getAllActiveSchedules() {
		return sesFact.getCurrentSession().createQuery("from Schedule where active = :active", Schedule.class)
				.setParameter("active", true).list();
	}

}
