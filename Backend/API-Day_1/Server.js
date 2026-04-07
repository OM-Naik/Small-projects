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
app.use(express.json()) // json data ko parse(convert) krne ke liye middleware use krna

app.post("/notes", (req, res) => {
    console.log(req.body) // request body ko console me print krna
    res.send("notes created")
})

app.listen(3000) // server start krna