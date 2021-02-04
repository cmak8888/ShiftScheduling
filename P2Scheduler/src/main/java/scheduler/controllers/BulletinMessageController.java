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

import scheduler.models.BulletinMessage;
import scheduler.service.BulletinMessageService;

@RestController
@CrossOrigin(origins = "*", allowCredentials = "true")
public class BulletinMessageController {
	@Autowired
	private BulletinMessageService bulletinMessageService;
	
	public BulletinMessageController(BulletinMessageService bulletinMessageService) {
		super();
		this.bulletinMessageService = bulletinMessageService;
	}
	
	@GetMapping(value = "/bulletin-message", params = {"id"})
	public BulletinMessage getBulletinMessageById(HttpServletRequest req, HttpServletResponse resp, int id) {
		resp.setStatus(200);
		return bulletinMessageService.getBulletinMessageById(id);
	}
	
	
	@GetMapping(value = "/bulletin-message", params = {"position_id"})
	public List<BulletinMessage> getBulletinMessageByPosition(HttpServletRequest req, HttpServletResponse resp, int position_id) {
		resp.setStatus(200);
		return bulletinMessageService.getBulletinMessageByPosition(position_id);
	}
	
	@GetMapping(value = "/bulletin-message", params = {"user_id"})
	public List<BulletinMessage> getBulletinMessageByUser(HttpServletRequest req, HttpServletResponse resp, int user_id) {
		resp.setStatus(200);
		return bulletinMessageService.getBulletinMessageByUser(user_id);
	}
	
	@GetMapping(value = "/all-bulletin-messages")
	public List<BulletinMessage> getAllBulletinMessages(HttpServletRequest req, HttpServletResponse resp) {
		resp.setStatus(200);
		return bulletinMessageService.getAllBulletinMessage();
	}
	
	@PostMapping(value = "insert-bulletin-message")
	public BulletinMessage insert(HttpServletRequest req, HttpServletResponse resp, @RequestBody() BulletinMessage bulletinMessage) {
		if(bulletinMessageService.insertBulletinMessage(bulletinMessage)) {
			resp.setStatus(200);
			return bulletinMessage;
		} else {
			resp.setStatus(500);
			return null;
		}
	}
	
	@PutMapping(value = "update-bulletin-message")
	public BulletinMessage update(HttpServletRequest req, HttpServletResponse resp, @RequestBody() BulletinMessage bulletinMessage) {
		if(bulletinMessageService.updateBulletinMessage(bulletinMessage)) {
			resp.setStatus(200);
			return bulletinMessage;
		} else {
			resp.setStatus(500);
			return null;
		}
	}
	
	@DeleteMapping(value = "delete-bulletinMessage", params = {"id"})
	public Map<String, String> delete(HttpServletRequest req, HttpServletResponse resp, int id) {
		if(bulletinMessageService.deleteBulletinMessage(id)) {
			resp.setStatus(200);
			return Collections.singletonMap("response", "Delete successful!");
		} else {
			resp.setStatus(500);
			return Collections.singletonMap("response", "Failed to delete account");
		}
	}
}
