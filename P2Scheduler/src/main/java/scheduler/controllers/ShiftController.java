package scheduler.controllers;

import java.util.Collections;
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

import scheduler.models.Shift;
import scheduler.service.ShiftService;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true")
public class ShiftController {

	@Autowired
	private ShiftService shiftService;
	
	public ShiftController(ShiftService shiftService) {
		super();
		this.shiftService = shiftService;
	}
	
	@GetMapping(value = "/shift", params = {"id"})
	public Shift getShiftById(HttpServletRequest req, HttpServletResponse resp, int id) {
		resp.setStatus(200);
		return shiftService.getShiftById(id);
	}
	
	@GetMapping(value = "/shift", params = {"schedule_id"})
	public List<Shift> getShiftBySchedule(HttpServletRequest req, HttpServletResponse resp, int schedule_id) {
		resp.setStatus(200);
		return shiftService.getShiftBySchedule(schedule_id);
	}
	
	@GetMapping(value = "/shift", params = {"user_id"})
	public List<Shift> getShiftByUser(HttpServletRequest req, HttpServletResponse resp, int user_id) {
		resp.setStatus(200);
		return shiftService.getShiftByUser(user_id);
	}
	
	@GetMapping(value = "/shift", params = {"position_id"})
	public List<Shift> getShiftByPosition(HttpServletRequest req, HttpServletResponse resp, int position_id) {
		resp.setStatus(200);
		return shiftService.getShiftByPosition(position_id);
	}
	
	@GetMapping(value = "/all-shifts")
	public List<Shift> getAllShifts(HttpServletRequest req, HttpServletResponse resp) {
		resp.setStatus(200);
		return shiftService.getAllShift();
	}
	
	@PostMapping(value = "insert-shift")
	public Shift insert(HttpServletRequest req, HttpServletResponse resp, @RequestBody() Shift shift) {
		if(shiftService.insertShift(shift)) {
			resp.setStatus(200);
			return shift;
		} else {
			resp.setStatus(500);
			return null;
		}
	}
	
	@PutMapping(value = "update-shift")
	public Shift update(HttpServletRequest req, HttpServletResponse resp, @RequestBody() Shift shift) {
		if(shiftService.updateShift(shift)) {
			resp.setStatus(200);
			return shift;
		} else {
			resp.setStatus(500);
			return null;
		}
	}
	
	@DeleteMapping(value = "delete-shift", params = {"id"})
	public Map<String, String> delete(HttpServletRequest req, HttpServletResponse resp, int id) {
		if(shiftService.deleteShift(id)) {
			resp.setStatus(200);
			return Collections.singletonMap("response", "Delete successful!");
		} else {
			resp.setStatus(500);
			return Collections.singletonMap("response", "Failed to delete account");
		}
	}
}
