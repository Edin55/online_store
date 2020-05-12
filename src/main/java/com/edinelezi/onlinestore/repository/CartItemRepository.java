package com.edinelezi.onlinestore.repository;

import com.edinelezi.onlinestore.model.CartItem;
import com.edinelezi.onlinestore.model.Order;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface CartItemRepository extends CrudRepository<CartItem, Long> {
    CartItem findCartItemById(Long id);
    List<CartItem> findByOrder(Order order);
}
