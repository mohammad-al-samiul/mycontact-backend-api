const express = require('express');
const errorHandler = require('./middleware/errorHandler');

const dotenv = require('dotenv').config();

const Port = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use('/api/contact',require('./routes/contactRoutes'));
app.use(errorHandler);

app.listen(Port, () => {
    console.log(`Server Running on Port ${Port}`);
})