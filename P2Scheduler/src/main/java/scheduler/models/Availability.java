package scheduler.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "availability_table")
public class Availability {
	@Id
	@Column(name = "availability_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@JsonBackReference
	@OneToOne(mappedBy = "availability")
	private User user;
	
	@Column(name = "monday", nullable = false)
	private boolean monday;
	
	@Column(name = "tuesday", nullable = false)
	private boolean tuesday;
	
	@Column(name = "wednesday", nullable = false)
	private boolean wednesday;
	
	@Column(name = "thursday", nullable = false)
	private boolean thursday;
	
	@Column(name = "friday", nullable = false)
	private boolean friday;
	
	@Column(name = "saturday", nullable = false)
	private boolean saturday;
	
	@Column(name = "sunday", nullable = false)
	private boolean sunday;
	
	public Availability() {
		super();
	}
	
	public Availability(User user) {
		super();
		this.user = user;
	}

	public Availability(int id, User user, boolean monday, boolean tuesday, boolean wednesday, boolean thursday,
			boolean friday, boolean saturday, boolean sunday) {
		super();
		this.id = id;
		this.user = user;
		this.monday = monday;
		this.tuesday = tuesday;
		this.wednesday = wednesday;
		this.thursday = thursday;
		this.friday = friday;
		this.saturday = saturday;
		this.sunday = sunday;
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

	public boolean isMonday() {
		return monday;
	}

	public void setMonday(boolean monday) {
		this.monday = monday;
	}

	public boolean isTuesday() {
		return tuesday;
	}

	public void setTuesday(boolean tuesday) {
		this.tuesday = tuesday;
	}

	public boolean isWednesday() {
		return wednesday;
	}

	public void setWednesday(boolean wednesday) {
		this.wednesday = wednesday;
	}

	public boolean isThursday() {
		return thursday;
	}

	public void setThursday(boolean thursday) {
		this.thursday = thursday;
	}

	public boolean isFriday() {
		return friday;
	}

	public void setFriday(boolean friday) {
		this.friday = friday;
	}

	public boolean isSaturday() {
		return saturday;
	}

	public void setSaturday(boolean saturday) {
		this.saturday = saturday;
	}

	public boolean isSunday() {
		return sunday;
	}

	public void setSunday(boolean sunday) {
		this.sunday = sunday;
	}

	@Override
	public String toString() {
		return "Availability [id=" + id + "monday=" + monday + ", tuesday=" + tuesday
				+ ", wednesday=" + wednesday + ", thursday=" + thursday + ", friday=" + friday + ", saturday="
				+ saturday + ", sunday=" + sunday + "]";
	}
}
