package com.edinelezi.onlinestore.service.impl;

import com.edinelezi.onlinestore.model.CartItem;
import com.edinelezi.onlinestore.model.Order;
import com.edinelezi.onlinestore.repository.CartItemRepository;
import com.edinelezi.onlinestore.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class CartItemServiceImpl implements CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;




    public CartItem updateCartItem(CartItem cartItem) {
        BigDecimal bigDecimal = new BigDecimal(cartItem.getBook().getOurPrice()).multiply(new BigDecimal(cartItem.getQty()));

        bigDecimal = bigDecimal.setScale(2, BigDecimal.ROUND_HALF_UP);
        cartItem.setSubtotal(bigDecimal);

        cartItemRepository.save(cartItem);

        return cartItem;
    }


    public CartItem findById(Long id) {
        return cartItemRepository.findCartItemById(id);
    }

    public void removeCartItem(CartItem cartItem) {
        cartItemRepository.delete(cartItem);
    }

    public CartItem save(CartItem cartItem) {
        return cartItemRepository.save(cartItem);
    }

    public List<CartItem> findByOrder(Order order) {
        return cartItemRepository.findByOrder(order);
    }
}

