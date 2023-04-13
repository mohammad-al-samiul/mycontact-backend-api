const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

const Port = process.env.PORT || 5000;


// app.get('/api/contacts',async(req,res) => {
//     res.status(200).json({message:"Get all contacts"});
// })

app.use('/api/contacts',require('./routes/contactRoutes'));

app.listen(Port,() => {
    console.log(`Server Running on PORT ${Port}`);
})