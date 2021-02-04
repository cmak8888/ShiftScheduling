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

import scheduler.models.Availability;
import scheduler.service.AvailabilityService;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true")
public class AvailabilityController {

	@Autowired
	private AvailabilityService availabilityService;
	
	public AvailabilityController(AvailabilityService availabilityService) {
		super();
		this.availabilityService = availabilityService;
	}
	
	@GetMapping(value = "/availability", params = {"id"})
	public Availability getAvaiabilityById(HttpServletRequest req, HttpServletResponse resp, int id) {
		resp.setStatus(200);
		return availabilityService.getAvailabilityById(id);
	}
	
	@GetMapping(value = "/all-availabilities")
	public List<Availability> getAllAvailabilities(HttpServletRequest req, HttpServletResponse resp) {
		resp.setStatus(200);
		return availabilityService.getAllAvailability();
	}
	
	@PostMapping(value = "insert-availability")
	public Availability insert(HttpServletRequest req, HttpServletResponse resp, @RequestBody() Availability availability) {
		if(availabilityService.insertAvailability(availability)) {
			resp.setStatus(200);
			return availability;
		} else {
			resp.setStatus(500);
			return null;
		}
	}
	
	@PutMapping(value = "update-availability")
	public Availability update(HttpServletRequest req, HttpServletResponse resp, @RequestBody() Availability availability) {
		if(availabilityService.updateAvailability(availability)) {
			resp.setStatus(200);
			return availability;
		} else {
			resp.setStatus(500);
			return null;
		}
	}
	
	@DeleteMapping(value = "delete-availability", params = {"id"})
	public Map<String, String> delete(HttpServletRequest req, HttpServletResponse resp, int id) {
		if(availabilityService.deleteAvailability(id)) {
			resp.setStatus(200);
			return Collections.singletonMap("response", "Delete successful!");
		} else {
			resp.setStatus(500);
			return Collections.singletonMap("response", "Failed to delete account");
		}
	}
}
