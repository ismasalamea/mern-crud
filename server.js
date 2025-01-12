const express = require('express');
const fileupload = require("express-fileupload");
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/db');
// Use Node's default promise instead of Mongoose's promise library
mongoose.Promise = global.Promise;
// Connect to the database
mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
  //useFindAndModify:false
});

let db = mongoose.connection;

db.on('open', () => {
  console.log('Conectado a la base de datos.');
});

db.on('error', (err) => {
  console.log(`Error en la base de datos: ${err}`);
});

// Instantiate express
const app = express();

// Don't touch this if you don't know it
// We are using this for the express-rate-limit middleware
// See: https://github.com/nfriedly/express-rate-limit
app.enable('trust proxy');

// Set public folder using built-in express.static middleware
app.use(express.static('public'));

// Set body parser middleware
app.use(bodyParser.json());

// Enable cross-origin access through the CORS middleware
// NOTICE: For React development server only!
//if (process.env.CORS) {
  app.use(cors());
//}
app.use(fileupload());
// Initialize routes middleware
app.use('/api/users', require('./routes/users'));
app.use('/api/pagos', require('./routes/pagos'));

// Use express's default error handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ err: err });
});

// Start the server
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
