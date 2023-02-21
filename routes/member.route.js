/** load library express */
const express = require(`express`)

/** initiate object that instance of express */
const app = express()

/** allow to read 'request' with json type */
app.use(express.json())

/** load member's controller */
const memberController = require(`../controllers/member.controller`)

/** load middleware */
const { authorize } = require("../controllers/auth.controller")


app.get("/", [authorize], memberController.getAllMember)
app.post("/", [authorize], memberController.addMember)
app.post("/find", [authorize], memberController.findMember)
app.put("/:id", [authorize], memberController.updateMember)
app.delete("/:id", [authorize], memberController.deleteMember)

module.exports = app


