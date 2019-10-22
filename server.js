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
const locationObj = new Location(location,geoData);
return locationObj;
}
function Location(city, geoData);{
  this.search_query =city;
  this.formatted_query = geoData.results[0].formatted_address;
  this.latitude = geoData.results[0].geometry.location.lat;
  this.longitude =  geoData.results[0].geometry.location.lng;
}

app.listen(PORT, () => console.log(`I have been heard on ${PORT}`));
