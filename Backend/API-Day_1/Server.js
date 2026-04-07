const express = require('express');
const app = express();


app.use(express.json());

// const notes = []

// app.post('/notes', (req, res) => {
//     console.log(req.body);

//     notes.push(req.body);

//     res.send('Note added successfully');

// })

// app.get('/notes', (req, res) => {
//     res.send(notes);
// })

app.get('/', (req, res) => {
    res.send('Welcome to my API');
})

app.get('/about', (req, res) => {
    res.send('This is a simple API built with Express.js');
})

app.get('/home', (req, res) => {
    res.send('This is the home page');
})
