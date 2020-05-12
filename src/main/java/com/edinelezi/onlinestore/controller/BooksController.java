package com.edinelezi.onlinestore.controller;

import com.edinelezi.onlinestore.model.Book;
import com.edinelezi.onlinestore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api")
public class BooksController {

    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public List<Book> books(){
        return this.bookService.findAll();
    }
    @GetMapping("/book/{Id}")
    public Optional<Book> books(@PathVariable Long Id){
        return this.bookService.findById(Id);
    }

}
