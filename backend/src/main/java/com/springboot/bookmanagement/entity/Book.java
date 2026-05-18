package com.springboot.bookmanagement.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String author;
    private Integer price;
    private boolean available;

    public Book(String title, String author, Integer price) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.available = true;
    }
}
