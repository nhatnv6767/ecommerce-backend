const express = require('express')
const router = express.Router()
// middlewares
const {authCheck} = require('../middlewares/auth')
// controllers
const {createOrUpdateUser} = require("../controllers/auth")

// for example
const myMiddleware = (req, res, next) => {
    console.log("IM A MIDDLEWARE YAY")
}

router.post("/create-or-update-user", authCheck, createOrUpdateUser)

router.get("/testing", myMiddleware, (req, res) => {
    res.json({
        data: "You successfully tried middleware",
    })
})

module.exports = router;
