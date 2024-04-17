const { MongoClient, ObjectId } = require("mongodb");
const defaultUser = "admin";
const defaultPassword = "admin";

// Use environment variables if available, otherwise use default values
const username = process.env.DB_USER || defaultUser;
const password = process.env.DB_PWD || defaultPassword;
const dbUrl = `mongodb+srv://${username}:${password}@cluster0.kqwupps.mongodb.net/`;

const client = new MongoClient(dbUrl);
async function connection() {
  db = client.db("Bookshelf");

  return db;
}
async function getBooks() {
  try {
    const db = await connection();
    const results = await db.collection("books").find({}).toArray();
    return results;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}
async function getBooksById(bookId) {
  try {
    const db = await connection();
    return db.collection("books").findOne({ _id: new ObjectId(bookId) });
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    throw error;
  }
}
async function getCharacters() {
  try {
    const db = await connection();
    const results = await db.collection("characters").find({}).toArray();
    return results;
  } catch (error) {
    console.error("Error fetching character:", error);
    throw error;
  }
}
async function getCharactersById(characterId) {
  try {
    const db = await connection();
    return db.collection("characters").findOne({ _id: new ObjectId(bookId) });
  } catch (error) {
    console.error("Error fetching book by ID:", error);
    throw error;
  }
}
module.exports = {
  getBooks,
  getBooksById,
  getCharacters,
  getCharactersById,
};
