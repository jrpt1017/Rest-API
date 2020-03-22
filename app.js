/* eslint-disable import/newline-after-import */

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.port || 3000;
const bodyParser = require('body-parser');

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// Routes
const userRouter = require('./routes/userRouter');
app.use('/users', userRouter);

mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

app.listen(port, () => {
  console.log(`Successfully Running in Port: ${port}`);
});
