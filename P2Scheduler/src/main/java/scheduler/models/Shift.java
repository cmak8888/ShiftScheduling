package scheduler.models;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "shift_table")
public class Shift {


	@Id
	@Column(name = "shift_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "user_id", nullable = false)
	private User user;
	
	@Column(name = "shift_start_time", nullable = false)
	private Date shiftStartTime;
	
	@Column(name = "shift_end_time", nullable = false)
	private Date shiftEndTime;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "position_id", nullable = false)
	private Position position;
	
	@JsonBackReference
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "schedule_id", nullable = false)
	private Schedule schedule;
	
	public Shift(int id, User user, Date shiftStartTime, Date shiftEndTime, Position position, Schedule schedule) {
		super();
		this.id = id;
		this.user = user;
		this.shiftStartTime = shiftStartTime;
		this.shiftEndTime = shiftEndTime;
		this.position = position;
		this.schedule = schedule;
	}
	
	public Shift(int id, Date shiftStartTime, Date shiftEndTime, Position position, Schedule schedule) {
		super();
		this.id = id;
		this.shiftStartTime = shiftStartTime;
		this.shiftEndTime = shiftEndTime;
		this.position = position;
		this.schedule = schedule;
	}
	
	public Shift() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}

	public Schedule getSchedule() {
		return schedule;
	}

	public void setSchedule(Schedule schedule) {
		this.schedule = schedule;
	}

	@Override
	public String toString() {
		return "Shift [id=" + id + ", user=" + user + ", shiftStartTime=" + shiftStartTime + ", shiftEndTime="
				+ shiftEndTime + ", position=" + position + ", schedule=" + schedule + "]";
	}

	public Date getShiftStartTime() {
		return shiftStartTime;
	}

	public void setShiftStartTime(Date shiftStartTime) {
		this.shiftStartTime = shiftStartTime;
	}

	public Date getShiftEndTime() {
		return shiftEndTime;
	}

	public void setShiftEndTime(Date shiftEndTime) {
		this.shiftEndTime = shiftEndTime;
	}




}
