// import { getJSON, getLocation } from "./utilities.js";
import QuakesController from "./quakescontroller.js";

const quakesController = new QuakesController("#quakeList");
quakesController.init();

// const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

// function testGetQuakesForLocation() {
//   // call the getLocation function to get the lat/long
//   const location = getLocation();
//   // use that information to build out the correct URL
//   const geoUrl =
//     baseUrl + `&${location.coords.latitude}=${location.coords.longitude}`; // add location information here
//   // use the url to request the correct quakes 
//   const quakes = getJSON(geoUrl);
//   return quakes;
//   //log out the quakes for now.
// }
// testGetQuakesForLocation();