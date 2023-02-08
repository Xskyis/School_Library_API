/** load library express */
const express = require(`express`)
/** initiate object that instance of express */
const app = express()
/** allow to read 'request' with json type */
app.use(express.json())
/** load book's controller */
const bookController = require(`../controllers/book.controller`)
const { midOne } = require(`../middlewares/simple-middleware`)

/** create route to get data with method "GET" */
app.get("/",[midOne], bookController.getAllBooks)

const { authorize } = require(`../controllers/auth.controller`)
let { validateBook } = require(`../middlewares/book-validation`)

/** create route to find book
* using method "POST" and path "find" */
app.post("/find", [authorize], bookController.findBook)
app.post("/", [authorize],[validateBook], bookController.addBook)
app.put("/:id", [authorize],[validateBook], bookController.updateBook)
app.delete("/:id", [authorize], bookController.deleteBook)

/** export app in order to load in another file */
module.exports = app