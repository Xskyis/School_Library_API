/** load library express */
const express = require(`express`)
const { authorize } = require("../controllers/auth.controller")

/** initiate object that instance of express */
const app = express()

/** allow to read 'request' with json type */
app.use(express.json())

/** load member's controller */
const memberController = require(`../controllers/member.controller`)
let { validateMember } = require(`../middlewares/member-validation`)

app.get("/", [authorize], memberController.getAllMember)
app.post("/", [validateMember],[authorize], memberController.addMember)
app.post("/find", [authorize], memberController.findMember)
app.put("/:id", [validateMember],[authorize], memberController.updateMember)
app.delete("/:id", [authorize], memberController.deleteMember)

module.exports = app


