package scheduler.controllers;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import scheduler.models.Schedule;
import scheduler.service.ScheduleService;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true")
public class ScheduleController {
	@Autowired
	private ScheduleService scheduleService;
	
	public ScheduleController(ScheduleService scheduleService) {
		super();
		this.scheduleService = scheduleService;
	}
	
	@GetMapping(value = "/schedule", params = {"id"})
	public Schedule getScheduleById(HttpServletRequest req, HttpServletResponse resp, int id) {
		resp.setStatus(200);
		return scheduleService.getScheduleById(id);
	}
	
	@GetMapping(value = "/schedule", params = {"date"})
	public Schedule getScheduleByDate(HttpServletRequest req, HttpServletResponse resp, Date date) {
		resp.setStatus(200);
		return scheduleService.getScheduleByDate(date);
	}
	
	@GetMapping(value = "/all-schedules")
	public List<Schedule> getAllSchedules(HttpServletRequest req, HttpServletResponse resp) {
		resp.setStatus(200);
		return scheduleService.getAllSchedule();
	}
	
	@GetMapping(value = "/all-active-schedules")
	public List<Schedule> getAllActiveSchedules(HttpServletRequest req, HttpServletResponse resp) {
		resp.setStatus(200);
		return scheduleService.getAllActiveSchedule();
	}
	
	@PostMapping(value = "insert-schedule")
	public Schedule insert(HttpServletRequest req, HttpServletResponse resp, @RequestBody() Schedule schedule) {
		if(scheduleService.insertSchedule(schedule)) {
			resp.setStatus(200);
			return schedule;
		} else {
			resp.setStatus(500);
			return null;
		}
	}
	
	@PutMapping(value = "update-schedule")
	public Schedule update(HttpServletRequest req, HttpServletResponse resp, @RequestBody() Schedule schedule) {
		if(scheduleService.updateSchedule(schedule)) {
			resp.setStatus(200);
			return schedule;
		} else {
			resp.setStatus(500);
			return null;
		}
	}
	
	@DeleteMapping(value = "delete-schedule", params = {"id"})
	public Map<String, String> delete(HttpServletRequest req, HttpServletResponse resp, int id) {
		if(scheduleService.deleteSchedule(id)) {
			resp.setStatus(200);
			return Collections.singletonMap("response", "Delete successful!");
		} else {
			resp.setStatus(500);
			return Collections.singletonMap("response", "Failed to delete account");
		}
	}
}
