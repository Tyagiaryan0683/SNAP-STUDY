const express = require('express');
require('dotenv').config();
const connection = require('./connection');
const userRouter = require('./routes/user');
connection();
app.use(userRouter);
app.use(express.json());
app.use(compression());

const port = process.env.PORT || 3005;
app.listen(port, (err) => {
  if (err) {
    console.log(`Error occurred while starting server: ${err}`);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});