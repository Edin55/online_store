package com.edinelezi.onlinestore.service.impl;

import com.edinelezi.onlinestore.model.Book;
import com.edinelezi.onlinestore.repository.BookRepository;
import com.edinelezi.onlinestore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public List<Book> findAll(){
        return bookRepository.findAll();
    }
    @Override
    public Optional<Book> findById(Long id){
        return bookRepository.findById(id);
    }

}
