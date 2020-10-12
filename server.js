const express = require('express')
const morgan = require('morgan') //Logger Middleware
const cors = require('cors')//Use for Different Server
const bodyParser = require('body-parser') //Post Data Resquest Body Attach
const mongoose = require('mongoose')//MongoDB instance

const app = express()
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false })) //Handle Form Data
app.use(bodyParser.json())//Handle JSON Data



app.get('/', (req,res) => {
    res.json({
        message:'Welcome to the Application'
    })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`)
    mongoose.connect('mongodb://localhost/money-management-app',{useNewUrlParser:true},
        () => {
        console.log('DataBase Connected...')
    })
})