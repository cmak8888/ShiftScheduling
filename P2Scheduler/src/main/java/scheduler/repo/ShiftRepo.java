package scheduler.repo;

import java.util.List;

import scheduler.models.Shift;

public interface ShiftRepo {
	public boolean insertShift(Shift shift);
	public Shift getShiftById(int id);
	public List<Shift> getAllShifts();
	public List<Shift> getBySchedule(int schedule);
	public List<Shift> getByUser(int userId);
	public List<Shift> getByPosition(int positionId);
	public boolean updateShift(Shift shift);
	public boolean deleteShift(Shift shift);
}
