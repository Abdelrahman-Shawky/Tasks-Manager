const Task = require('../models/Task');

module.exports.getTasks = async (req, res) => {
    const taskList = await Task.find();
    res.render('home', {
        pageTitle: "Tasks Manager",
        taskList: taskList
    });
}


module.exports.postAddTask = async (req, res) => {
    const taskString = req.body.task;
    console.log(taskString);

    const task = new Task({
        taskContent: taskString,
        isDone: false
    });
    await task.save();
    console.log("Created Task !!");
    res.redirect('/')
}

module.exports.getEditTask = async (req, res) => {
    const taskId = req.params.taskId;
    const task = await Task.findById(taskId);
    res.render('edit', {
        pageTitle: "Edit Task",
        task: task
    });
}

module.exports.postEditTask = async (req, res) => {
    const taskId = req.body.taskId;
    const taskContent = req.body.taskContent;

    const task = await Task.findById(taskId);
    task.taskContent = taskContent;
    await task.save();
    console.log('Task Saved');
    res.redirect('/');
}

module.exports.postDeleteTask = async (req, res) => {
    const taskId = req.body.taskId;
    const task = await Task.findById(taskId);
    await task.deleteOne();
    console.log('Task Deleted');
    res.redirect('/');
}


module.exports.postDoneTask = async (req, res) => {
    const taskId = req.body.taskId;
    const task = await Task.findById(taskId);
    task.isDone = true;
    task.save();
    console.log('Task Comnpleted');
    res.redirect('/');
}




