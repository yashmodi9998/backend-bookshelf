var express = require("express");
var router = express.Router();
const model = require("./dbcon");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/books", async (req, res) => {
  try {
    let books = await model.getBooks();
    res.send(books);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/books/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = await model.getBooksById(bookId);

    if (!book) {
      return res.status(404).send("book not found");
    }
    res.send(book);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/characters", async (req, res) => {
  try {
    let characters = await model.getCharacters();
    res.send(characters);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/characters/:id", async (req, res) => {
  try {
    const charactersId = req.params.id;
    const character = await model.getCharactersById(charactersId);

    if (!character) {
      return res.status(404).send("character not found");
    }
    res.send(book);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
