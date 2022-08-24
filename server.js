const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require("dotenv").config()

// app

const app = express()

// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
})
.then(()=> console.log("DB CONNECTED"))
.catch(err => console.log(`DB CONNECTION ERROR ${err}`))

// middlewares
app.use(morgan("dev"))
app.use(bodyParser.json({limit: "5mb"}))
app.use(cors())

// routes
app.get("/api", (req, res) => {
    res.json({
        data: "Hey you hit node API updated",
    })
})

// port
const port = process.env.PORT;

app.listen(port, ()=> console.log(`Server is listening on ${port}`))