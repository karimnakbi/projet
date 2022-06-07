const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const cors = require('cors');
app.use( cors('http://localhost:5000'));

///Routes
app.use('/api/person', require('./routes/personRoutes'));
app.use('/api/product', require('./routes/productRoutes'));






// connection to database

const connectDB = require('./config/connectDB');
connectDB();
//server creation

const port = process.env.PORT || 5000;

app.listen(port, (err) =>
  err ? console.error(err) : console.log(`Server running On Port ${port}`)
);