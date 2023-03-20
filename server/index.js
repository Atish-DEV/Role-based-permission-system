//require all dependency
const express=require('express');
const port=4000;
const app=express();
const bodyParser=require('body-parser');
const db=require('./config/mongoose');
const passport=require('passport');
const passportJWT=require('./config/passport-jwt-strategy');
const cookieParser = require("cookie-parser");
const cors=require('cors');
//set middleware
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',require('./routes'));
//set the server in action mode
app.listen(port,function(err){
    if(err){
        console.log('Err occurred :',err);
    }
    console.log('App is running at port ',port);
});