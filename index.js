const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./config/dbConnection');
const dotenv = require('dotenv').config();

connectDB();
const app = express();

const Port = process.env.PORT || 5001;

app.use(express.json());
app.use('/api/contact',require('./routes/contactRoutes'));
app.use('/api/user',require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(Port, () => {
    console.log(`Server Running on Port ${Port}`);
})