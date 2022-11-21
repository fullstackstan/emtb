const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')
const connectDB = require('./config/db')

//load config
dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

//logging
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

//ejs
app.set('view engine', 'ejs')
app.use(expressLayouts)

//routes
app.use('/', require('./routes/index'))

//static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server running on ${PORT} in ${process.env.NODE_ENV} mode`))