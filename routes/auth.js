const express = require('express')
const router = express.Router()

router.get("/create-or-update-user", myfunction)


module.exports = router;

exports.myfunction = (req, res) => {
    res.json({
        data: "Hey you hit create-or-update-user API endpoint",
    })
}