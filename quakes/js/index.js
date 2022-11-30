// import { getJSON, getLocation } from "./utilities.js";
import QuakesController from "./quakescontroller.js";

const quakesController = new QuakesController("#quakeList");
quakesController.init();

function testGetQuakesForLocation() {
  // call the getLocation function to get the lat/long
  let location = getLocation();
  // use that information to build out the correct URL
  const geoUrl = baseUrl + location; // add location information here
  // use the url to request the correct quakes
    return geoUrl;
  //log out the quakes for now.
}
getQuakesForLocation();

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