// app.js

const express = require('express');
var bodyParser = require('body-parser');

const app = express();
// parse application/json
app.use(bodyParser.json())

const connectDB = require('./config/db');
var cors = require('cors'); 

// Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Hello world!'));
const routes = require('./routes/api/books');

app.use('/api/books', routes);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
