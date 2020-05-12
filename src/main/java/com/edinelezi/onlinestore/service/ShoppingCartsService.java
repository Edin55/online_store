package com.edinelezi.onlinestore.service;


import com.edinelezi.onlinestore.model.ShoppingCart;
import org.springframework.stereotype.Service;



@Service
public interface ShoppingCartsService {

    ShoppingCart updateShoppingCart(ShoppingCart shoppingCart);

    void clearShoppingCart(ShoppingCart shoppingCart);
}

