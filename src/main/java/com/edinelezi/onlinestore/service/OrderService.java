package com.edinelezi.onlinestore.service;

import com.edinelezi.onlinestore.model.Order;
import com.edinelezi.onlinestore.model.ShoppingCart;
import com.edinelezi.onlinestore.model.security.User;

import java.util.Optional;

public interface OrderService {
    Order createOrder(ShoppingCart shoppingCart,
                      String shippingAddress,
                      String shippingMethod,
                      User user);

    Optional<Order> findOne(Long id);
}