package com.edinelezi.onlinestore.controller;

import com.edinelezi.onlinestore.model.Book;
import com.edinelezi.onlinestore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api")
public class BooksController {

    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public List<Book> books(){
        return this.bookService.findAll();
    }
    @GetMapping("/books/{Id}")
    public Book books(@PathVariable Long Id){
        return this.bookService.findOne(Id);
    }

}
