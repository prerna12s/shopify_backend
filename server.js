require('dotenv').config();
const express= require('express');
//set  a namespace for debugging


const app = express();
const cookieParser=require('cookie-parser');

const db=require('./config/mongoose-connection');
//for frontend files
const path = require('path');
//routes
const usersRouters=require('./routes/userRouter');
const ownersRouters=require('./routes/ownerRouter');    
const productsRouters=require('./routes/productRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));    
app.use(cookieParser());
//for frontend files
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
//
//USE ROUTES 

app.use('/users',usersRouters);
app.use('/owners',ownersRouters);
app.use('/products',productsRouters);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'not set'}`);
});