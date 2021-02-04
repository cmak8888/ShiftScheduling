package scheduler.repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import scheduler.models.Availability;

@Repository("AvailabilityRepo")
@Transactional
public class AvailabilityRepoImplementation implements AvailabilityRepo {

	public AvailabilityRepoImplementation(SessionFactory sesFact) {
		super();
		this.sesFact = sesFact;
	}

	private SessionFactory sesFact;

	@Override
	public boolean insertAvailability(Availability availability) {
		try{ 
			sesFact.getCurrentSession().save(availability);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}

	}

	@Override
	public Availability getAvailabilityById(int id) {
		return sesFact.getCurrentSession().get(Availability.class, id);
	}

	@Override
	public List<Availability> getAllAvailabilities() {
		return sesFact.getCurrentSession().createQuery("from Availability", Availability.class).list();
	}



	@Override
	public boolean updateAvailability(Availability availability) {
		try{ 
			sesFact.getCurrentSession().update(availability);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deleteAvailability(Availability availability) {
		try{ 
			sesFact.getCurrentSession().delete(availability);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
