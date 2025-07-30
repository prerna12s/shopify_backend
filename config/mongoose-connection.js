const mongoose = require('mongoose');
const dbgr=require('debug')("development:mongoose-connection");
const config =require("config");


mongoose.connect(`${config.get('MONGODB_URI')}`/shopify)
.then(()=>dbgr('connected to database'))
.catch((err) => {
    dbgr('Database connection error:', err);
});
//kya variable us nhi ke saath use kar sakte?
module.exports=mongoose.connection;