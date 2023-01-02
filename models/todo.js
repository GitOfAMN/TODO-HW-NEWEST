const { models, Schema } = require('mongoose')
const mongoose = require('mongoose')

const todoSchema = new Schema({
    title: {require: true, type: String},
    completed: {required: true, type: String}
}, {
    timestamps: true
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo;