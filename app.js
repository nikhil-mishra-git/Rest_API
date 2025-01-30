const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectDatabase = require('./config/db')
const productRouter = require('./router/product.router')

// Body Parse
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// EJS setting
app.set('view engine','ejs');

// Entry Page
app.get('/',(req,res)=>{
    res.send('Welcome Sir')
})

// Pass Router
app.use('/api',productRouter);


// Server PORT
app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server Running on PORT : ${process.env.PORT || 3000}`);
})