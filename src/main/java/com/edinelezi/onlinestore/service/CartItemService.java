package com.edinelezi.onlinestore.service;

import com.edinelezi.onlinestore.model.CartItem;
import com.edinelezi.onlinestore.model.Order;

import java.util.List;

public interface CartItemService {

    CartItem updateCartItem(CartItem cartItem);

    CartItem findById(Long id);

    void removeCartItem(CartItem cartItem);

    CartItem save(CartItem cartItem);

    List<CartItem> findByOrder(Order order);
}