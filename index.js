const express = require('express');
const app = express();
//database connection
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017');
let db = mongoose.connection;
db.on('error',(err)=>{
  console.log(err);
})
db.once('open',()=>{

  console.log('connected successfully');
})
const userSchema = new Schema({
    email:  String,
    password: String,

  });
  const User = mongoose.model('User', userSchema);










//setting
app.set('view engine','pug')











//listening request
app.get('/',(req,res)=>{
  res.render('index');
})

//listening request
app.get('/about',(req,res)=>{
  res.render('about');
})



//starting server
app.listen(3000);
