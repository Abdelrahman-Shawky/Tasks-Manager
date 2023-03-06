const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    taskContent: {
        type: String,
        required: true,
    },
    isDone: {
        type: Boolean,
        required: true
    }
})

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
