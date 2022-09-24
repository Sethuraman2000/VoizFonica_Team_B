package com.project.register;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Integer>{

	Admin findByUsernameAndPassword(String username, String password);

}
