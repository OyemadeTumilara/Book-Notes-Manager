-- Drop the books table if it exists
DROP TABLE IF EXISTS books; 

-- Create books table
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  rating INTEGER,
  notes TEXT,
  read_date DATE
);

-- Insert sample data
INSERT INTO books (title, author, rating, notes, read_date)
VALUES ('Atomic Habits', 'James Clear', 7, 'Great insights on habit formation.', '2023-01-15'),
       ('Sapiens', 'Yuval Noah Harari', 4, 'A thought-provoking history of humankind.', '2023-02-20');

-- Additional sample data
INSERT INTO books (title, author, rating, notes, read_date)
VALUES 
    ('The Power of Habit', 'Charles Duhigg', 5, 'Interesting take on the science of habits.', '2023-03-10'),
    ('Educated', 'Tara Westover', 2, 'A powerful memoir about overcoming adversity.', '2023-04-05'),
    ('The Subtle Art of Not Giving a F*ck', 'Mark Manson', 8, 'A refreshing perspective on self-help.', '2023-05-12'),
    ('Thinking, Fast and Slow', 'Daniel Kahneman', 3, 'Insightful exploration of human thinking.', '2023-06-18'),
    ('Becoming', 'Michelle Obama', 1, 'Inspiring autobiography of the former First Lady.', '2023-07-22');

