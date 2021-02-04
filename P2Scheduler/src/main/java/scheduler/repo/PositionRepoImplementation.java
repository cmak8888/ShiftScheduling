package scheduler.repo;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import scheduler.models.Position;

@Repository("PositionRepo")
@Transactional
public class PositionRepoImplementation implements PositionRepo{

	public PositionRepoImplementation(SessionFactory sesFact) {
		super();
		this.sesFact = sesFact;
	}

	private SessionFactory sesFact;
	
	@Override
	public boolean insertPosition(Position position) {
		try{ 
			sesFact.getCurrentSession().save(position);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
		
	}

	@Override
	public Position getPositionById(int id) {
		return sesFact.getCurrentSession().get(Position.class, id);
	}

	@Override
	public List<Position> getAllPositions() {
		return sesFact.getCurrentSession().createQuery("from Position", Position.class).list();
	}

	@Override
	public boolean updatePosition(Position position) {
		try{ 
			sesFact.getCurrentSession().update(position);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean deletePosition(Position position) {
		try{ 
			sesFact.getCurrentSession().delete(position);
			return true;
		} catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

}
