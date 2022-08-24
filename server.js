const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const {readdirSync} = require('fs')
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

// routes middleware

readdirSync("./routes").map((r)=>
    app.use("/api", require('./routes/' + r))
)

// port
const port = process.env.PORT;

app.listen(port, ()=> console.log(`Server is listening on ${port}`))