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


@Entity
@Table(name = "message_table")
public class Message implements Comparable<Message>{
	@Id
	@Column(name = "message_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "sender_id", nullable = false)
	private User sender;
	
	@Column(name = "content", nullable = false)
	private String content;
	
	@Column(name = "time", nullable = false)
	private Date time;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "reciever_id", nullable = false)
	private User reciever;

	public Message(int id, User sender, String content, Date time, User reciever) {
		super();
		this.id = id;
		this.sender = sender;
		this.content = content;
		this.time = time;
		this.reciever = reciever;
	}
	
	public Message() {
		super();
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}


	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Date getTime() {
		return time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public User getSender() {
		return sender;
	}

	public void setSender(User sender) {
		this.sender = sender;
	}

	public User getReciever() {
		return reciever;
	}

	public void setReciever(User reciever) {
		this.reciever = reciever;
	}

	@Override
	public String toString() {
		return "Message [id=" + id + ", sender=" + sender + ", content=" + content + ", time=" + time + ", reciever="
				+ reciever + "]";
	}

	@Override
	public int compareTo(Message o) {
		return this.getTime().compareTo(o.getTime());
	}


}
