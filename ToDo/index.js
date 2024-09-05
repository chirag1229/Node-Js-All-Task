const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json())

const todo_arr = [];


app.get('/', (req, res) => {
    res.render('index', { todo_data: todo_arr })
})

// Show Data Api
app.post('/', (req, res) => {
    const body_data = req.body
    todo_arr.push(body_data['todo_item'])
    res.render('index', { todo_data: todo_arr })
})

// Delete Api
app.delete('/:id', (req, res) => {
    const index = req.params['id']
    todo_arr.splice(index, 1)
    res.render('index', { todo_data: todo_arr })
})

app.listen(8000)