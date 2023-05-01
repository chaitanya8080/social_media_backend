const express = require("express");
const cors = require("cors");

const userRoutes = require('./routes/userRoutes')
const dotenv =  require("dotenv");
const  connection  =  require("./db/db");
dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', userRoutes);


app.listen(7004, () => {
  try {
    connection
    console.log("Server started on port 7004");
  } catch (error) {
    console.log(error.message)
  }
});


