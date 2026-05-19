CREATE DATABASE bookdb;
USE bookdb;

CREATE TABLE books (
                       id BIGINT AUTO_INCREMENT PRIMARY KEY,
                       title VARCHAR(255) NOT NULL,
                       author VARCHAR(255) NOT NULL,
                       price INT NOT NULL,
                       available BOOLEAN NOT NULL
);
INSERT INTO books (title, author, price, available)
VALUES
    ('Harry Potter', 'J.K. Rowling', 12000, true),
    ('The Hobbit', 'J.R.R. Tolkien', 15000, true),
    ('Clean Code', 'Robert C. Martin', 20000, true),
    ('Spring in Action', 'Craig Walls', 25000, tr