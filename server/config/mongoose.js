//require mongoose module
const mongoose=require('mongoose');
//set mongodb connection
mongoose.connect('mongodb://localhost/rbac');
const db=mongoose.connection;
//set on error message
db.on('error',console.error.bind(console,'error'));
//set on connect message
db.once('open',function(){
    console.log('Successfully connected to database');
});
module.exports=db;