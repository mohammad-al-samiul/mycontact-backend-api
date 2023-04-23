const mongoose = require('mongoose');


const connectDB = async () => {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(connect.connection.name);
    console.log(connect.connection.host);
}

module.exports = connectDB;