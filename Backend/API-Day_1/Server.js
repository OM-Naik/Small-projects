const express = require("express")

const app = express() // server instance create krna

//get request --> to get data from server
//for "Get" we use Render.com and create a server
app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get("/about", function (req, res) {
    res.send("This is about page")
})

app.get("/home", (req, res) => {
    res.send("This is Home page")
})

//post request --> to send data to server
//for "Post" we use Postman and create a server
const notes = []
app.use(express.json()) // json data ko parse(convert) krne ke liye middleware use krna

app.post("/notes", (req, res) => {
    console.log(req.body) // request body ko console me print krna
    res.send("notes created")
})

//delete request --> to delete data from server
app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index] // delete the note at the specified index
    res.send("note deleted successfully")
})

app.listen(3000) // server start krna