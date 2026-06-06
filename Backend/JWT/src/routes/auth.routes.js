const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();
const crypto = require("crypto");

authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });


    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User with this email already exists",
        });
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex");  

    const user = await userModel.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ userId: user._id, emailId: user.email }, process.env.JWT_SECRET_KEY, {
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


authRouter.post("/protected", (req, res) => {
    console.log("req.cookies", req.cookies);

    res.status(200).json({
        message: "You have accessed the protected route",
    });
});


authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    const isPasswordValid = user.password === crypto.createHash("sha256").update(password).digest("hex") ;
    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Invalid password",
        });
    }

    const token = jwt.sign({ userId: user._id, emailId: user.email }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
    });

    res.cookie("jwt_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });

    res.status(200).json({
        message: "User logged in successfully",
        user,
        token,
    });

});

module.exports = authRouter;