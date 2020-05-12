package com.edinelezi.onlinestore.repository;

import com.edinelezi.onlinestore.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface BookRepository extends JpaRepository<Book, Long> {
    Book findBookById(Long id);
}
