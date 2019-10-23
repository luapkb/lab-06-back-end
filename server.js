'use strict';

const express = require('express');

const cors = require('cors');

require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3003;
//routes
app.get('/searchLatToLong', (request, response) => {
  const city = request.query.data;
  const latlong = searchLatToLong(city);

  response.send(latlong,'LOOK AT ME..');
});
app.get('/')

app.get('/weather', (request, resoponse) => {
  const darkskyData = require('./data/darksky.json')
  const tempArray = []
  resoponse.status(404).send('somepen wrong here');

  darkskydata.daily.data.forEach (object => {
    let tempValue = new Weather (object);
    tempArray.push(tempValue); 
  })
});

function Wearther (object) {
  this.forcast = object.summary;
  this.time = this.revisedDate(object.time)
}
Wearther.prototype.revisedDate = funtion (time) {
  let dat
}
function searchLatToLong(location){
  const geoData = require('./data/jeo.jason');
  console.log(geoData);
const locationObj = new latlong(location,geoData);
return locationObj;
}
function latlong(city, geoData);{
  this.search_query = City;
  this.formatted_query = geoData.results[0].formatted_address;
  this.latitude = geoData.results[0].geometry.location.lat;
  this.longitude =  geoData.results[0].geometry.location.lng;
}

app.listen(PORT, () => console.log(`I have been heard on ${PORT}`));
