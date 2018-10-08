const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5bbafb20d3b9322f3c1a870c';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

/** Find all, array */
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('todos: ', todos);
// });

// /** Find one, return only one */
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('todo: ', todo);
// });

/** Find by id */
Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('todo by id: ', todo);
}).catch((e) => {
    console.log(e);
});