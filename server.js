'use strict';

const express = require('express');

require('dotenv').config();

const app =express();

const PORT = process.env.PORT || 3003;
//routes 
app.length('*', (request, response) => {
  const city = request.query.data;
  response.send (city);
})

app.listen(PORT, () => console.log(`I have been heard on ${PORT}`));