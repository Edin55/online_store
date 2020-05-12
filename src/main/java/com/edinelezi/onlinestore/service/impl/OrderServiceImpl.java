package com.edinelezi.onlinestore.service.impl;

import com.edinelezi.onlinestore.model.Book;
import com.edinelezi.onlinestore.model.CartItem;
import com.edinelezi.onlinestore.model.Order;
import com.edinelezi.onlinestore.model.ShoppingCart;
import com.edinelezi.onlinestore.model.security.User;
import com.edinelezi.onlinestore.repository.OrderRepository;
import com.edinelezi.onlinestore.service.CartItemService;
import com.edinelezi.onlinestore.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private CartItemService cartItemService;

    public synchronized Order createOrder(ShoppingCart shoppingCart,
                                          String shippingAddress,
                                          String shippingMethod,
                                          User user) {
        Order order = new Order();
        order.setOrderStatus("created");
        order.setShippingAddress(shippingAddress);
        order.setShippingMethod(shippingMethod);

//        List<CartItem> cartItemList = cartItemService.findByShoppingCart(shoppingCart);

        for(CartItem cartItem : shoppingCart.getCartItemList()) {
            Book book = cartItem.getBook();
            cartItem.setOrder(order);
            book.setInStockNumber(book.getInStockNumber() - cartItem.getQty());
        }

        order.setCartItemList(shoppingCart.getCartItemList());
        order.setOrderDate(Calendar.getInstance().getTime());
        order.setOrderTotal(shoppingCart.getGrandTotal());
        order.setUser(user);
        order = orderRepository.save(order);

        return order;
    }

    public Optional<Order> findOne(Long id) {
        return orderRepository.findById(id);
    }

}
