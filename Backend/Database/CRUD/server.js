/*
It is to start server and connect it to database.
*/

require("dotenv").config();

const app = require("./src/app") // app.js file ko import krna
const mongoose = require("mongoose") // mongoose library ko import krna
const connectToDatabase = require("./src/config/database") // database.js file ko import krna 

// Below code is present in [./config/database.js] --> It is use for connect to MongoDB database

// function connectToDatabase() {
//     mongoose.connect("mongodb+srv://osnaik23_db_user:fMXqxxDnHX3pvwX5@cluster0.pjxw7au.mongodb.net/day-6").then(() => {
//         console.log("Connected to MongoDB database");
//     }).catch((error) => {
//         console.error("Error connecting to MongoDB database:", error);
//     });
// }

const dns = require('node:dns/promises'); // DNS servers ko set krna
dns.setServers(['8.8.8.8', '1.1.1.1']); // Google's and Cloudflare's DNS servers

connectToDatabase();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

