import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "booknotes",
    password: "1234",
    port: 5432,
});
db.connect();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let books = (await db.query("SELECT * FROM books ORDER BY id ASC")).rows;

app.get("/", async (req, res) => {
    for (let book of books) {
        try {
            const response = await axios.get(`https://covers.openlibrary.org/b/id/${book.id}-L.jpg`);
            book.coverImage = response.config.url;
        } catch (error) {
            console.error(`Could not fetch cover image for book ID ${book.id}:`, error);
            book.coverImage = null;
        }
    }
    res.render("index.ejs", { books: books });
});

app.get("/edit/:id", async (req, res) => {
    let eBook = req.params.id;
    let eBooks = (await db.query("SELECT * FROM books WHERE id = $1", [eBook])).rows;
    res.render("new.ejs", { eBooks: eBooks });
});

app.get("/delete/:id", async (req, res) => {
    await db.query("DELETE FROM books WHERE id = $1", [req.params.id]);
    res.redirect("/");
});

app.post("/new", async (req, res) => {
    res.render("new.ejs");
});

app.post("/edit/:id", async (req, res) => {
    await db.query(
        "UPDATE books SET title = $1, author = $2, rating = $3, read_date = $4, notes = $5 WHERE id = $6",
        [req.body.title, req.body.author, req.body.rating, req.body.date_read, req.body.notes, req.params.id]
    );
    res.redirect("/");
});

app.post("/addNew", async (req, res) => {
    await db.query(
        "INSERT INTO books (title, author, rating, read_date, notes) VALUES ($1, $2, $3, $4, $5)",
        [req.body.title, req.body.author, req.body.rating, req.body.date_read, req.body.notes]
    );
    res.redirect("/");
});

app.post("/sort", async (req, res) => {
    if (req.body.title) {
        books = (await db.query("SELECT * FROM books ORDER BY title ASC")).rows;
    } else if (req.body.newest) {
        books = (await db.query("SELECT * FROM books ORDER BY id DESC")).rows;
    } else {
        books = (await db.query("SELECT * FROM books ORDER BY rating DESC")).rows;
    }
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
