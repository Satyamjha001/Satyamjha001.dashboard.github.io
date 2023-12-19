
///Get geolocation
let lat_form = document.getElementById("lat");
let lon_form = document.getElementById("lon");

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition,error);
    lat_form.placeholder = "Locating...";
    lon_form.placeholder = "Locating...";
  } else {
    lat_form.placeholder = "Geolocation is not supported by this browser.";
    lon_form.placeholder = "Geolocation is not supported by this browser.";
  }
}

const showPosition = (position) => {
  lat_form.value = position.coords.latitude.toFixed(4);
  lon_form.value = position.coords.longitude.toFixed(4);
}

const error = () => {
  lat_form.placeholder = "Geolocation disabled";
  lon_form.placeholder = "Geolocation disabled";
}

const change1 = () => {
  myButton = document.getElementById("system_capacity");
  myButton.value = "600"
  document.getElementById("800").checked=false;
  document.getElementById("1000").checked=false;
  console.log("done");
}
const change2 = () => {
  myButton = document.getElementById("system_capacity");
  myButton.value = "800"
  document.getElementById("600").checked=false;
  document.getElementById("1000").checked=false;
  console.log("done");
}
const change3 = () => {
  myButton = document.getElementById("system_capacity");
  myButton.value = "1000"
  document.getElementById("800").checked=false;
  document.getElementById("600").checked=false;
  console.log("done");
}
///
