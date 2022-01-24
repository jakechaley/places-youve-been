let pdx = { name: "Portland" };
let sfo = { name: "San Francisco" };
let sea = { name: "Seattle" };
let boi = { name: "Boise" };
let lax = { name: "Los Angeles" };
let aus = { name: "Austin" };
let nas = { name: "Nashville"};
let veg = { name: "Las Vegas"};

let usa = { name: "United States of America" };

function PlacesContainer() {
  this.places = {};
}

function Place (state, region, weather) {
  this.state = state;
  this.region = region;
  this.weather = weather;
}