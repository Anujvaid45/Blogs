require('dotenv').config()
const express = require('express')
const colors = require('colors')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const AuthRoutes = require('./routes/authRoutes.js')
const blogRoutes = require('./routes/blogRoutes.js');

const app = express()
app.use(cors());

// //middleware
app.use(express.json())
app.use(morgan('dev'))

// //routes
app.use('/api/v1/auth',AuthRoutes)
app.use('/blog', blogRoutes);


// //rest api
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Blogs app</h1>")
})

// //connect to db

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log(`connected to db&listening on port ${process.env.PORT}`.bgCyan.white)
    })

})
.catch((err)=>{
    console.log(`${err}`.bgRed.white)
})
