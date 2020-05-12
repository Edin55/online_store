package com.edinelezi.onlinestore.controller;


import com.edinelezi.onlinestore.model.Book;
import com.edinelezi.onlinestore.model.CartItem;
import com.edinelezi.onlinestore.model.ShoppingCart;
import com.edinelezi.onlinestore.model.security.User;
import com.edinelezi.onlinestore.service.BookService;
import com.edinelezi.onlinestore.service.CartItemService;
import com.edinelezi.onlinestore.service.ShoppingCartsService;
import com.edinelezi.onlinestore.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;


@RestController
@RequestMapping("/api/shoppingCart")
public class ShoppingCartController {

//    @Autowired
//    private UsersService usersService;
//
//    @Autowired
//    private CartItemService cartItemService;
//
//    @Autowired
//    private BookService bookService;
//
//    @Autowired
//    private ShoppingCartsService shoppingCartsService;
//
//
//    @GetMapping()
//    public ShoppingCart shoppingCart(Principal principal) {
//        User user = usersService.findByUsername(principal.getName());
//        ShoppingCart shoppingCart = user.getShoppingCart();
//
//        shoppingCartsService.updateShoppingCart(shoppingCart);
//
//        return shoppingCart;
//    }
//
//    @RequestMapping("/addItem")
//    public String addItem(
//            @ModelAttribute("book") Book book,
//            @ModelAttribute("qty") String qty,
//            Model model, Principal principal
//    ) {
//        User user = usersService.findByUsername(principal.getName());
//        book = bookService.findOne(book.getId());
//
//
//
//        return "Succesfull";
//    }
//
//    @RequestMapping("/updateCartItem")
//    public String updateShoppingCart(
//            @ModelAttribute("id") Long cartItemId,
//            @ModelAttribute("qty") int qty
//    ) {
//        CartItem cartItem = cartItemService.findById(cartItemId);
//        cartItem.setQty(qty);
//        cartItemService.updateCartItem(cartItem);
//
//        return "Successfull";
//    }
//
//    @RequestMapping("/removeItem")
//    public String removeItem(@RequestParam("id") Long id) {
//        cartItemService.removeCartItem(cartItemService.findById(id));
//
//        return "Successfull";
//    }
}

