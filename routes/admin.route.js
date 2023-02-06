/** load library express */
const express = require(`express`)

/** initiate object that instance of express */
const app = express()

/** allow to read 'request' with json type */
app.use(express.json())

/** load member's controller */
const adminController = require(`../controllers/admin.controller`)

/** create route to get data with method "GET" */
app.get("/", adminController.getAllAdmin)
app.post("/", adminController.addAdmin)
app.post("/find", adminController.findAdmin)
app.put("/:id", adminController.updateAdmin)
app.delete("/:id", adminController.deleteAdmin)

/** export app in order to load in another file */
module.exports = app