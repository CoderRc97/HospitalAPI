const express =require('express');
const port= 8000;
const bodyparser= require('body-parser');
const db = require('./config/mongoose');
const passportJWT = require('./config/passport-jwt-strategy');
const app=express();

app.use(bodyparser.urlencoded({extended : false}));
app.use(bodyparser.json());

app.use('/',require('./routes/index'))
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }

    console.log(`server is running: ${port}`);
});