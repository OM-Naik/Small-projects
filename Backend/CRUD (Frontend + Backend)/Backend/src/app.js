/*

It is use for server creation and configuration. It is used to create a server and handle the requests and responses.


*/

const express = require("express")
const noteModel = require("./models/notes.model") // notes.model.js file ko import krna
const cors = require("cors") // CORS middleware ko import krna

const app = express() // server instance create krna

app.use(express.json()) // json data ko parse krna
app.use(cors()) // CORS middleware ko use krna

/**
 * -POST /notes --> create a new note
 * -req.body --> {title,description}
 */

app.post("/notes", async (req, res) => {

    const { title, description } = req.body;

    const note = await noteModel.create({ title, description });
    //This will give us the created note

    res.status(201).json({
        message: "Note created successfully",
        note,
    });
})


/**
 * -GET /notes --> get all notes
 */

app.get("/notes", async (req, res) => {

    const notes = await noteModel.find();
    //This will give us all the notes

    res.status(200).json({
        message: "Notes fetched successfully",
        notes,
    });
})


/*
 * -Delete /notes/:id --> delete a note
 */

app.delete("/notes/:id", async (req, res) => {

    const note = await noteModel.findByIdAndDelete(req.params.id);
    //This will give us the deleted note

    res.status(200).json({
        message: "Note deleted successfully",
        note,
    });
})


/*
 * -PUT /notes/:id --> update a note
 */

app.put("/notes/:id", async (req, res) => {

    const id = req.params.id;
    const { description } = req.body;

    const note = await noteModel.findByIdAndUpdate(id, { description });
    //This will give us the updated note

    res.status(200).json({
        message: "Note updated successfully",
        note,
    });
})

/*
*  -PATCH /notes/:id --> update a note
*/

app.patch("/notes/:id", async (req, res) => {

    const id = req.params.id;
    const { description } = req.body;
    const note = await noteModel.findByIdAndUpdate(id, { description });
    //This will give us the updated note
    res.status(200).json({
        message: "Note updated successfully",
        note,
    });
})

const path = require("path") // path module ko import krna
app.use((req, res) => {
    // res.status(404).json({
    //     message: "Route not found",
    // });
    res.sendFile(path.join(__dirname, "..", "public/index.html"));
})

module.exports = app