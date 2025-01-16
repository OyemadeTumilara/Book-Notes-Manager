# Book Notes Manager

This project is a web application that helps users manage their book notes. Users can add, edit, delete, and sort their book notes. The application fetches book cover images using a public API.

## Project Structure

- **index.js**: The main server file
- **node_modules**: Contains npm packages (add this to `.gitignore` and do not upload it)
- **public**
  - **styles/**: Contains `main.css`
- **views**
  - **index.ejs**: Main view file
  - **new.ejs**: View file for adding or editing books
- **package.json**
- **package-lock.json**

## Features

- Add, edit, and delete book notes
- Fetch and display book cover images using a public API
- Sort books by title, newest, or rating

## How to Use

1. **Clone the repository**:
   ```bash
   git clone https://github.com/OyemadeTumilara/Book-Notes-Manager.git
   cd Book-Notes-Manager

   # Install dependencies
   npm install

   # Start the server
   npm start

   # Open the application in your browser
   http://localhost:3000

## Database Setup

1. **Ensure you have PostgreSQL installed and running.**
  
2. **Create a database named booknotes**

   CREATE DATABASE booknotes;
   
3. **Set up the database connection**
   
  - Open index.js and update the database configuration to match your PostgreSQL setup:
   const db = new pg.Client({
   user: "your_postgres_username",
   host: "localhost",
   database: "booknotes",
   password: "your_postgres_password",
   port: 5432,
   });
db.connect();

4. **Run the SQL queries in the queries.sql file to set up the necessary tables**:

- -- Drop the books table if it exists
DROP TABLE IF EXISTS books;

- -- Create the books table
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  rating INTEGER,
  read_date DATE,
  notes TEXT
);

- -- Insert sample data
INSERT INTO books (title, author, rating, read_date, notes)
VALUES
  ('The Great Gatsby', 'F. Scott Fitzgerald', 5, '2023-01-01', 'A classic novel set in the Jazz Age'),
  ('1984', 'George Orwell', 4, '2023-02-15', 'A dystopian novel about totalitarianism');
