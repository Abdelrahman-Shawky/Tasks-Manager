const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    isDone: {
        type: Boolean,
        required: true
    }
})

const Task = mongoose.model('task', userSchema);

module.exports = Task;
