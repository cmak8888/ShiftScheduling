package scheduler.models;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "schedule_table")
public class Schedule {
	
	@Id
	@Column(name = "schedule_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column(name = "schedule_date", unique = true, nullable = false)
	private Date startDate;
	
	@Column(name = "active", nullable = false)
	private boolean active;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "schedule", fetch = FetchType.EAGER)
	private List<Shift> shifts = new ArrayList<>();

	
	public Schedule() {
		super();
	}
	
	public Schedule(int id, Date startDate, boolean active) {
		super();
		this.id = id;
		this.startDate = startDate;
		this.active = active;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	@Override
	public String toString() {
		return "Schedule [id=" + id + ", startDate=" + startDate + "]";
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public List<Shift> getShifts() {
		return shifts;
	}

	public void setShifts(List<Shift> shifts) {
		this.shifts = shifts;
	}
	
}
