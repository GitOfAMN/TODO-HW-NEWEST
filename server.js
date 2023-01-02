require('dotenv').config()
// this lets me take the values from my .env file and inject them into process.env my .env should have a MONGO-URI which will come from my MongoDB cloud provider.

require('./config/database');
//this is us connecting our database to our MERN app

const express = require('express')
const app = express()
// this creates an application object that we an use to build our API that will connect to our REACT app

const path = require('path')
//this is a free node.js package that comes with it right out of the box

const favicon = require('serve-favicon')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

//middleware
app.use(express.json())
//this most import and necessary is the package.json middleware
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev'))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use('/api/todos', require('./routes/api/todos'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})


app.listen(PORT, () => {
    console.log(`I am listening on ${PORT}. We In the Building.`)
})