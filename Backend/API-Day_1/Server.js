const express = require("express")

const app = express() // server instance create krna

//get request
app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get("/about", function (req, res) {
    res.send("This is about page")
})

app.get("/home", (req, res) => {
    res.send("This is Home page")
})

//post request
const notes = []

app.post("/notes", (req, res) => {
    res.send("notes created")
})

app.listen(3000) // server start krna