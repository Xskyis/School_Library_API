/** load express */
const express = require('express')

/** inisiasi obj  */
const app = express()

/** allow request.json */
app.use(express.json())

/** memuat borrow controller */
const borrowController = require('../controllers/borrow.controller')

const { authorize } = require(`../controllers/auth.controller`)

/** route tambah pinjam buku */
app.post("/", [authorize], borrowController.addBorrowing)
app.put("/:id", [authorize], borrowController.updateBorrowing)
app.delete("/:id", [authorize], borrowController.deleteBorrowing)
app.get("/return/:id", [authorize], borrowController.returnBook)
app.get("/", [authorize], borrowController.getBorrow)
app.post("/:id", [authorize], borrowController.getBorrowByMember)

module.exports = app


