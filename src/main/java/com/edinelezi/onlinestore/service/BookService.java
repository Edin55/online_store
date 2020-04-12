package com.edinelezi.onlinestore.service;


import com.edinelezi.onlinestore.model.Book;


import java.util.List;
import java.util.Optional;


public interface BookService {
    List<Book> findAll();

    Optional<Book> findById(Long id);

}