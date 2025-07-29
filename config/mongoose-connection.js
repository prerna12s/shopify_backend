const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopify')
.then(()=>console.log('connected to database'))
.catch((err) => {
    console.error('Database connection error:', err);
});
//kya variable us nhi ke sakte?
module.exports=mongoose.connection;