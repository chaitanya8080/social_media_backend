


const mongoose = require("mongoose");
const dotenv =  require("dotenv");
dotenv.config()

console.log("this is connect method on")

 const connection = mongoose.connect(process.env.mongo_URI);

 module.exports = connection;




// const mongoose = require('mongoose');


// console.log("this is connect method on")

// const connectionString = 'mongodb+srv://booksapp:booksapp123@cluster0.otjhj7u.mongodb.net/books?retryWrites=true&w=majority';


// mongoose.connect(connectionString, options).then(() => {
//   console.log('MongoDB connected successfully');
// }).catch((err) => {
//   console.error('MongoDB connection error:', err);
// });

// module.exports = mongoose.connection;