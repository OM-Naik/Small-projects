const express = require("express");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();
const bcrypt = require("crypto");



authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const isUserExist = await UserModel.findOne({ email });

    if (isUserExist) {
        return res.status(400).json({ message: "User already exists" });
    }


    const hashedPassword = bcrypt.createHash("sha256").update(password).digest("hex");

    const newuser = await UserModel.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ userId: newuser._id, email: newuser.email }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
    });

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });

    res.status(201).json({
        message: "User registered successfully",
        user: newuser,
        token,
    });

});

authRouter.post("/get-me", async (req, res) => {

    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const newuser = await UserModel.findById(decoded.userId);

    res.json({
        name: newuser.name,
        email: newuser.email,
    });
});

authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = user.password === bcrypt.createHash("sha256").update(password).digest("hex");
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
    });

    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in successfully",
        user,
        token,
    });
});

module.exports = authRouter;