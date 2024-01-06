const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://fardinKhan:AyR90RgJ2MOwqZzQ@cluster0.qmu47yh.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description : String,
    completed : Boolean

})

const todo = mongoose.model('todos', todoSchema); 

module.exports = {
    todo: todo
}