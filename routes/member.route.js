/** load library express */
const express = require(`express`)

/** initiate object that instance of express */
const app = express()

/** allow to read 'request' with json type */
app.use(express.json())

/** load member's controller */
const memberController = require(`../controllers/member.controller`)

app.get("/", memberController.getAllMember)
app.post("/", memberController.addMember)
app.post("/find", memberController.findMember)
app.put("/:id", memberController.updateMember)
app.delete("/:id", memberController.deleteMember)

module.exports = app


