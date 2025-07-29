const express= require('express');

const app = express();
const cookieParser=require('cookie-parser');

const db=require('./config/mongoose-connection');
//for frontend files
const path = require('path');
//

app.use(express.json());
app.use(express.urlencoded({ extended: true }));    
app.use(cookieParser());
//for frontend files
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
//
//USE ROUTES 

app.use('/users',userSRouters);
app.use('/owners',ownersRouters);
app.use('/products',productsRouters);
