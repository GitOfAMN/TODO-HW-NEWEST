const express = require('express')
const router = express.Router()
const todoCtrl = require('../../controllers/api/todos')

// Index for the /api/todos path
router.get('/', todoCtrl.indexNotComplete, todoCtrl.jsonTodos)
// Index for the /api/todos/completed path
router.get('/completed', todoCtrl.indexComplete, todoCtrl.jsonTodos)
// Delete for the /api/todos/:id path
router.delete('/:id', todoCtrl.destroy, todoCtrl.jsonTodo)
// Update for the /api/todo/:id path
router.put('/:id', todoCtrl.update, todoCtrl.jsonTodo)
// Create for the /api/todos path
router.post('/', todoCtrl.create, todoCtrl.jsonTodo)
// Show for the /api/todos/:id path
router.get('/:id', todoCtrl.show, todoCtrl.jsonTodo)

module.exports = router