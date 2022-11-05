require("dotenv").config()
const express = require("express");
const User = require('./model/user')
const app = express()


app.get("/", (req, res) => {
    res.send("<h1>Welcome</h1>")
})

app.post("/signup", async(req, res) => {

    //For all mandatory fields
    const { firstname, lastname, email, password } = req.body

    if (!(email && password && firstname && lastname)) {
        res.status(400).send("All the fields are required")
    }

    //Unique mail
    const extuser = await User.findOne(email)
    if (extuser) {
        res.status(400).send("User Already Exit")
    }

    //Password


})

module.exports = app