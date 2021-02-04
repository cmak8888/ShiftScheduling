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

import scheduler.models.Position;
import scheduler.service.PositionService;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true")
public class PositionController {


	@Autowired
	private PositionService positionService;
	
	public PositionController(PositionService positionService) {
		super();
		this.positionService = positionService;
	}
	
	@GetMapping(value = "/position", params = {"id"})
	public Position getPositionById(HttpServletRequest req, HttpServletResponse resp, int id) {
		resp.setStatus(200);
		return positionService.getPositionById(id);
	}
		
	@GetMapping(value = "/all-positions")
	public List<Position> getAllPositions(HttpServletRequest req, HttpServletResponse resp) {
		resp.setStatus(200);
		return positionService.getAllPosition();
	}
	
	@PostMapping(value = "insert-position")
	public Position insert(HttpServletRequest req, HttpServletResponse resp, @RequestBody() Position position) {
		if(positionService.insertPosition(position)) {
			resp.setStatus(200);
			return position;
		} else {
			resp.setStatus(500);
			return null;
		}
	}
	
	@PutMapping(value = "update-position")
	public Position update(HttpServletRequest req, HttpServletResponse resp, @RequestBody() Position position) {
		if(positionService.updatePosition(position)) {
			resp.setStatus(200);
			return position;
		} else {
			resp.setStatus(500);
			return null;
		}
	}
	
	@DeleteMapping(value = "delete-position", params = {"id"})
	public Map<String, String> delete(HttpServletRequest req, HttpServletResponse resp, int id) {
		if(positionService.deletePosition(id)) {
			resp.setStatus(200);
			return Collections.singletonMap("response", "Delete successful!");
		} else {
			resp.setStatus(500);
			return Collections.singletonMap("response", "Failed to delete account");
		}
	}
}
