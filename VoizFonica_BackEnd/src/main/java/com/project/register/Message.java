package com.project.register;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="messages")
public class Message {
	@Id
	int numbers;
	String message;
	public int getNumbers() {
		return numbers;
	}
	
	public void setNumbers(int numbers) {
		this.numbers = numbers;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "Message [numbers=" + numbers + ", message=" + message + "]";
	}

}
