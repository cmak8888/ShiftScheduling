package scheduler.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import scheduler.models.Shift;
import scheduler.repo.ShiftRepo;

@Service
public class ShiftService {
	
	@Autowired
	private ShiftRepo shiftRepo;
	
	public ShiftService(ShiftRepo shiftRepo) {
		super();
		this.shiftRepo = shiftRepo;
	}
	
	public boolean insertShift(Shift shift) {
		System.out.println(shift.getPosition());
		System.out.println(shift);
		return shiftRepo.insertShift(shift);
	}
	
	public boolean updateShift(Shift shift) {
		return shiftRepo.updateShift(shift);
	}
	
	public boolean deleteShift(int id) {
		return shiftRepo.deleteShift(shiftRepo.getShiftById(id));
	}
	
	public Shift getShiftById(int id) {
		return shiftRepo.getShiftById(id);
	}
	
	public List<Shift> getShiftBySchedule(int id) {
		return shiftRepo.getBySchedule(id);
	}
	
	public List<Shift> getShiftByUser(int id) {
		return shiftRepo.getByUser(id);
	}
	
	public List<Shift> getShiftByPosition(int id) {
		return shiftRepo.getByPosition(id);
	}
	
	public List<Shift> getAllShift() {
		return shiftRepo.getAllShifts();
	}
	
}
