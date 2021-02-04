package scheduler.repo;

import java.util.List;

import scheduler.models.Position;

public interface PositionRepo {
	public boolean insertPosition(Position position);
	public Position getPositionById(int id);
	public List<Position> getAllPositions();
	public boolean updatePosition(Position position);
	public boolean deletePosition(Position position);
}
