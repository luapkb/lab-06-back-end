'use strict';

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3003;
//routes
app.get('/location', (request, response) => {

  const city = request.query.data;

  const locationData = searchLatToLong(city);


  response.send(locationData);

});


app.get('*', (request, resoponse) => {
  resoponse.status(404).send('somepen wrong here');
});

function searchLatToLong(lacation){
  const geoData = require('./data/jeo.jason');
  console.log(geoData);

  const locationObj = {
    search_query: location,
    formatted_query: geoData.results[0].formatted_address,
    latitude: geoData.results[0].location.lat,
    longitude: geoData.results[0].location.lng,
  }

}

app.listen(PORT, () => console.log(`I have been heard on ${PORT}`));
