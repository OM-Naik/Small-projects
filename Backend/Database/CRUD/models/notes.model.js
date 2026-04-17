const moongose = require('mongoose');

const noteSchema = new moongose.Schema({
    title: String,
    description: String,
});

const noteModel = moongose.model("Note", noteSchema);


module.exports = noteModel;