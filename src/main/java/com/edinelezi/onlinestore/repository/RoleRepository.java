package com.edinelezi.onlinestore.repository;


import java.util.Optional;

import com.edinelezi.onlinestore.model.security.ERole;
import com.edinelezi.onlinestore.model.security.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}