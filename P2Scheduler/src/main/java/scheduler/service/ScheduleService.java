package scheduler.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import scheduler.models.Schedule;
import scheduler.repo.ScheduleRepo;

@Service
public class ScheduleService {

	@Autowired
	private ScheduleRepo scheduleRepo;
	
	public ScheduleService(ScheduleRepo scheduleRepo) {
		super();
		this.scheduleRepo = scheduleRepo;
	}
	
	public boolean insertSchedule(Schedule schedule) {
		return scheduleRepo.insertSchedule(schedule);
	}
	
	public boolean updateSchedule(Schedule schedule) {
		return scheduleRepo.updateSchedule(schedule);
	}
	
	public boolean deleteSchedule(int id) {
		return scheduleRepo.deleteSchedule(scheduleRepo.getScheduleById(id));
	}
	
	public Schedule getScheduleById(int id) {
		return scheduleRepo.getScheduleById(id);
	}
	
	public Schedule getScheduleByDate(Date date) {
		return scheduleRepo.getScheduleByDate(date);
	}
	
	public List<Schedule> getAllActiveSchedule() {
		return scheduleRepo.getAllActiveSchedules();
	}
	
	public List<Schedule> getAllSchedule() {
		return scheduleRepo.getAllSchedules();
	}
	
}
