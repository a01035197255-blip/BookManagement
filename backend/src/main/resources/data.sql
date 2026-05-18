CREATE TABLE books (
   id BIGINT AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(255) NOT NULL,
   author VARCHAR(255) NOT NULL,
   price INT DEFAULT 0,
   status VARCHAR(50) DEFAULT 'reading',
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO books (title, author, price, status)
VALUES
    ('Harry Potter', 'J.K. Rowling', 12000, 'reading'),
    ('The Hobbit', 'J.R.R. Tolkien', 15000, 'done'),
    ('Clean Code', 'Robert C. Martin', 20000, 'want'),
    ('Spring in Action', 'Craig Walls', 25000, 'reading');

SELECT * FROM books;