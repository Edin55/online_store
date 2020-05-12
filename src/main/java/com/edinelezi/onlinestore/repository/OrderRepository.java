package com.edinelezi.onlinestore.repository;

import com.edinelezi.onlinestore.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
