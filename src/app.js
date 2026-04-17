const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/users',require('./modules/user/routes'));
app.use('/api/products',require('./modules/product/routes'));

app.use((err,req,res,next)=>{
  res.status(500).json({error:err.message});
});

module.exports = app;
