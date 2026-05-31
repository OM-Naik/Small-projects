const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });


    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User with this email already exists",
        });
    }

    const user = await userModel.create({ name, email, password });

    const token = jwt.sign({ userId: user._id , emailId: user.email }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
    });

    res.cookie("jwt_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });

    res.status(201).json({
        message: "User registered successfully",
        user,
        token,
    });
});

module.exports = authRouter;