const express = require('express');
const authRouter = require("./routes/auth.routes"); // auth.routes.js file ko import krna taki uske routes ko use kr ske
const cookieParser = require("cookie-parser"); // cookie-parser middleware ko import krna taki cookies ko handle kr ske

const app = express();


app.use(express.json());
app.use(cookieParser()); // cookie-parser middleware ko use krna taki cookies ko handle kr ske

app.use("/api/auth", authRouter); // /auth ke andar jo bhi routes honge wo authRouter ke through handle honge


module.exports = app;