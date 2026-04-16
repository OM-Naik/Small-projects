const mongoose = require("mongoose");

function connectToDatabase() {
    mongoose.connect("mongodb+srv://osnaik23_db_user:fMXqxxDnHX3pvwX5@cluster0.pjxw7au.mongodb.net/day-6").then(() => {
        console.log("Connected to MongoDB database");
    }).catch((error) => {
        console.error("Error connecting to MongoDB database:", error);
    });
}

module.exports = connectToDatabase;