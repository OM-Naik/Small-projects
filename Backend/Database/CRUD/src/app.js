/*

It is use for server creation and configuration. It is used to create a server and handle the requests and responses.


*/

const express = require("express")
const noteModel = require("./models/notes.model") // notes.model.js file ko import krna

const app = express() // server instance create krna

app.use(express.json()) // json data ko parse krna

/**
 * -POST /notes --> create a new note
 * -req.body --> {title,description}
 */

app.post("/notes", async (req, res) => {
    const { title, description } = req.body;
    const note = await noteModel.create({ title, description });

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
    res.status(200).json({
        message: "Notes fetched successfully",
        notes,
    });
})


module.exports = app