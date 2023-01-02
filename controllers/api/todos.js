// const { useCallback } = require('react')
const Todo = require('../../models/todo')

module.exports = {
    create,
    indexComplete,
    indexNotComplete,
    show,
    update,
    destroy,
    jsonTodos, //this allows us to display all the todos to the user
    jsonTodo //or just one todo
}


//jsonTodos, jsonTodo
function jsonTodo (req, res){
    res.json(res.locals.data.todo)
}

function jsonTodos (req, res){
    res.json(res.locals.data.todos)
}


//create
async function create(req, res, next){
    try {
        const todo = await Todo.create(req.body)
        console.log(todo)
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//read -- break this function down into index and show
//complete
async function indexComplete(req, res, next){
    try {
        const todos = await Todo.find({ completed: true })
        res.locals.data.todos = todos
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//not complete
async function indexNotComplete(req, res, next){
    try {
        const todos = await Todo.find({ completed: false })
        res.locals.data.todos = todos
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//show
async function show(req, res, next){
    try {
        const todo = await Todo.findById(req.params.id)
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//update
async function update(req, res, next){
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new : true })
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//destroy
async function destroy(req, res, next){
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.locals.data.todo = todo
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}