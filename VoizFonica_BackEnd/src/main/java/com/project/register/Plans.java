package com.project.register;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "planlists")
public class Plans {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	int card;
	int amount;
	String voice;
	String sms;
	String data;
	String validity;

	public int getCard() {
		return card;
	}

	public void setCard(int card) {
		this.card = card;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getVoice() {
		return voice;
	}

	public void setVoice(String voice) {
		this.voice = voice;
	}

	public String getSms() {
		return sms;
	}

	public void setSms(String sms) {
		this.sms = sms;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getValidity() {
		return validity;
	}

	public void setValidity(String validity) {
		this.validity = validity;
	}

	@Override
	public String toString() {
		return "Plans [id=" + id + ", card=" + card + ", amount=" + amount + ", voice=" + voice + ", sms=" + sms
				+ ", data=" + data + ", validity=" + validity + "]";
	}

}
