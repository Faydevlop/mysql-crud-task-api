const express = require("express");
const router = express.Router()
const taskController = require('../controllers/task.controller')

router.post("/",taskController.create)
router.get("/",taskController.findAll)
router.get("/:id",taskController.findOne)
router.put("/:id",taskController.update)
router.delete("/:id",taskController.delete)

module.exports = router;