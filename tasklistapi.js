const express = require('express');
const sequelize = require('./config/sequelize');
const Task = require('./model/task');

const app = express();

app.listen(4000, () =>{
    console.log("The server is started");
    sequelize.sync()
    .then(() => {
        console.log('Database synced successfully!');
    })
    .catch((err) => {
        console.log('Error syncing database:', err);
    });
});

app.use(express.json());


app.post('/tasks', async(req, res) => {
    try{
        let title_info = req.body.title;
        let desc_info = req.body.description;

        const task = await Task.create(
            {
                title: title_info,
                description: desc_info
            }
        );
        console.log(task);
        res.status(201).json(task);
    } catch(err){
        res.status(500).json({error: 'Failed to create the task'});
    }
});

app.get('/tasks', async(req, res) => {
    try{
        const tasks = await Task.findAll();
        console.log("task list " +tasks);
        res.json(tasks);
    } catch(err){
        res.status(500).json({error: 'Failed to fetch the tasks'});
    }
})