package com.project.register;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="paymentdetail")
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String product;
	String amount;
	String name;
	String number;
	String email;
	String cardnumber;
	@Override
	public String toString() {
		return "Payment [product=" + product + ", amount=" + amount + ", name=" + name + ", number=" + number
				+ ", email=" + email + ", cardnumber=" + cardnumber + "]";
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCardnumber() {
		return cardnumber;
	}
	public void setCardnumber(String cardnumber) {
		this.cardnumber = cardnumber;
	}
	

}
