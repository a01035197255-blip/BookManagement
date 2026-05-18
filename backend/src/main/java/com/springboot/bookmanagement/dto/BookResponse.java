package com.springboot.bookmanagement.dto;

import com.springboot.bookmanagement.entity.Book;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BookResponse {
    private Long id;
    private String title;
    private String author;
    private Integer price;
    private boolean available;

    public static BookResponse from(Book book) {
        BookResponse dto = new BookResponse();
        dto.setId(book.getId());
        dto.setTitle(book.getTitle());
        dto.setAuthor(book.getAuthor());
        dto.setPrice(book.getPrice());
        dto.setAvailable(book.isAvailable());
        return dto;
    }
}
