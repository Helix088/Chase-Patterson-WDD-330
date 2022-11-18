// import { getJSON, getLocation } from "./utilities.js";

// const baseUrl =
//   "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-02-02";

// let quakes = [];

// async function showQuakes() {
//   const location = await initPos();
//   quakes = await getQuakesForLocation(location);
//   console.log(quakes);
//   const listElement = document.querySelector("#quakeList");
//   listElement.innerHTML = generateListMarkup(
//     quakes.features,
//     earthquakeListTemplate
//   );
//   listElement.addEventListener("click", earthQuakeClickHandler);
// }


// async function initPos() {
//   let locResp = await getLocation();
//   console.log(locResp);
//   const location = locResp.coords;
//   return location;
// }

// async function getQuakesForLocation(location) {
//   const radius = 100;
//   const query =
//     baseUrl +
//     `&latitude=${location.latitude}&longitude=${location.longitude}&maxradiuskm=${radius}`;
//   console.log(query);
//   quakes = await getJSON(query);
//   return quakes;
// }

// function generateListMarkup(list, templateCallback) {
//   const listElement = document.querySelector("#quakeList");
//   const listHtml = earthquakeListTemplate(list);
//   listElement.innerHTML = listHtml.join("");
//   return templateCallback();
// }

// function earthquakeListTemplate(data) {
//   return data.map((quake) => {
//     return `<li><a href="${quake.properties.url}">${quake.properties.title} 
// ${new Date(quake.properties.time)}</a></li>
// `;
//   });
// }

// function earthQuakeClickHandler() {
// listElement.addEventListener("click", (event) => {
//   console.log(event.target);
//   const quakeId = event.target.dataset.id;
//   const quake = quakes.features.find((item) => item.id === quakeId);
//   // render details
//   const detailsElement = document.querySelector("#quakeDetails");
//   const quakeProperties = Object.entries(quake.properties);
//   detailsElement.innerHTML = quakeProperties
//     .map((item) => {
//       if (item[0] === "time" || item[0] === "updated") {
//         return `
// ${item[0]}: ${new Date(item[1])}
// `;
//       } else
//         return `
// ${item[0]}: ${item[1]}
// `;
//     })
//     .join("");
// });
// }

// showQuakes();