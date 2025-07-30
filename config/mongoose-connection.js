const mongoose = require('mongoose');
const dbgr=require('debug')("development:mongoose-connection");


mongoose.connect('mongodb://localhost:27017/shopify')
.then(()=>dbgr('connected to database'))
.catch((err) => {
    dbgr('Database connection error:', err);
});
//kya variable us nhi ke saath use kar sakte?
module.exports=mongoose.connection;