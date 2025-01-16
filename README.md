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
