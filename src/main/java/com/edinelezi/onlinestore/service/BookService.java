package com.edinelezi.onlinestore.service;


import com.edinelezi.onlinestore.model.Book;


import java.util.List;


public interface BookService {
    List<Book> findAll();

    Book findOne(Long id);

}
