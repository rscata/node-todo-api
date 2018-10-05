var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        require: true,
        trim: true
    }, 
    copleted: {
        type: Boolean,
        default: true
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {Todo};