const express = require('express');
const authRouter = require("./routes/auth.routes"); // auth.routes.js file ko import krna taki uske routes ko use kr ske


const app = express();


app.use(express.json());

app.use("/api/auth", authRouter); // /auth ke andar jo bhi routes honge wo authRouter ke through handle honge


module.exports = app;