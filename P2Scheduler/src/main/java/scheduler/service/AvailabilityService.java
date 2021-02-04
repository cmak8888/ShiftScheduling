package scheduler.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import scheduler.models.Availability;
import scheduler.repo.AvailabilityRepo;

@Service
public class AvailabilityService {

	@Autowired
	private AvailabilityRepo availabilityRepo;
	
	public AvailabilityService(AvailabilityRepo availabilityRepo) {
		super();
		this.availabilityRepo = availabilityRepo;
	}
	
	public boolean insertAvailability(Availability availability) {
		return availabilityRepo.insertAvailability(availability);
	}
	
	public boolean updateAvailability(Availability availability) {
		return availabilityRepo.updateAvailability(availability);
	}
	
	public boolean deleteAvailability(int id) {
		return availabilityRepo.deleteAvailability(availabilityRepo.getAvailabilityById(id));
	}
	
	public Availability getAvailabilityById(int id) {
		return availabilityRepo.getAvailabilityById(id);
	}
	
	public List<Availability> getAllAvailability() {
		return availabilityRepo.getAllAvailabilities();
	}
}
