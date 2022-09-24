package com.project.register;


	import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
	import javax.persistence.Table;

	@Entity
	@Table(name="registerdetails")
	public class Register {
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		int id;
		String number;
		String name;
		int age;	
		String email;
		
		String password;
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}

		public int getAge() {
			return age;
		}
		public void setAge(int age) {
			this.age = age;
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
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		@Override
		public String toString() {
			return "Register [id=" + id + ", number=" + number + ", name=" + name + ", age=" + age + ", email=" + email
					+ ", password=" + password + "]";
		}

}
