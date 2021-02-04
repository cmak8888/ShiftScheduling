package scheduler.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import scheduler.models.Position;
import scheduler.repo.PositionRepo;

@Service
public class PositionService {

	@Autowired
	private PositionRepo positionRepo;
	
	public PositionService(PositionRepo positionRepo) {
		super();
		this.positionRepo = positionRepo;
	}
	
	public boolean insertPosition(Position position) {
		return positionRepo.insertPosition(position);
	}
	
	public boolean updatePosition(Position position) {
		return positionRepo.updatePosition(position);
	}
	
	public boolean deletePosition(int id) {
		return positionRepo.deletePosition(positionRepo.getPositionById(id));
	}
	
	public Position getPositionById(int id) {
		return positionRepo.getPositionById(id);
	}
	
	public List<Position> getAllPosition() {
		return positionRepo.getAllPositions();
	}
	
}
