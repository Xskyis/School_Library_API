/** load express */
const express = require('express')

/** inisiasi obj  */
const app = express()

/** allow request.json */
app.use(express.json())

/** memuat borrow controller */
const borrowController = require('../controllers/borrow.controller')

/** route tambah pinjam buku */
app.post("/", borrowController.addBorrowing)
app.put("/:id", borrowController.updateBorrowing)
app.delete("/:id", borrowController.deleteBorrowing)
app.get("/return/:id", borrowController.returnBook)
app.get("/", borrowController.getBorrow)
app.post("/:id", borrowController.getBorrowByMember)

module.exports = app


