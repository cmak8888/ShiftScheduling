package scheduler.repo;

import java.util.List;

import scheduler.models.Availability;

public interface AvailabilityRepo {
	public boolean insertAvailability(Availability availability);
	public Availability getAvailabilityById(int id);
	public List<Availability> getAllAvailabilities();
	public boolean updateAvailability(Availability availability);
	public boolean deleteAvailability(Availability availability);
}
