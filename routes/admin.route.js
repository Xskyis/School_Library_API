/** load library express */
const express = require(`express`)

/** initiate object that instance of express */
const app = express()

/** allow to read 'request' with json type */
app.use(express.json())

/** load member's controller */
const adminController = require(`../controllers/admin.controller`)
const { authorize } = require(`../controllers/auth.controller`)
let { validateAdmin } = require(`../middlewares/admin-validation`)

/** create route to get data with method "GET" */
app.get("/", [authorize],adminController.getAllAdmin)
app.post("/", [authorize], [validateAdmin], adminController.addAdmin)
app.post("/find", [authorize],adminController.findAdmin)
app.put("/:id", [authorize], [validateAdmin], adminController.updateAdmin)
app.delete("/:id", [authorize],adminController.deleteAdmin)

/** export app in order to load in another file */
module.exports = app