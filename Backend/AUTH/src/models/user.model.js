const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: [true, "Email already exists"], // email unique hona chahiye, agar duplicate email aata hai to error message "Email already exists" show hoga
    },
    password: String,
});

const userModel = mongoose.model("User", userSchema);


module.exports = userModel;