const Request = require('./services/request.js');
const request = new Request('https://restcountries.eu/rest/v2/all');
const dbRequest = new Request('http://localhost:3000/bucket_list');
const MapWrapper = require('./views/mapWrapper.js')
const CountryView = require('./views/countryView.js')
const countryView = new CountryView();

const getDbRequestComplete = function(allCountriesDb){
  for(country of allCountriesDb){
    countryView.addCountry(country);
    map.addMarker({lat: country.latlng[0], lng: country.latlng[1]});
  };
};

const populateDropDownMenu = function(allCountries){
  const select = document.querySelector('#countryDropDown');
  const defaultOption = document.createElement('option');
  defaultOption.innerText = 'Select a country to add to bucket list';
  defaultOption.disabled=true;
  defaultOption.selected = true;
  select.appendChild(defaultOption);
  allCountries.forEach(function(country,index){
    let option = document.createElement("option")
    option.innerText = country.name
    option.value = index
    select.appendChild(option)
  });
};

const getCountry = function (countries) {
  const selectedCountry =document.querySelector('#countryDropDown');
  selectedCountry.addEventListener('change',function() {
    country = countries[this.value];
    // countryName =  country.name;
    return country;
  })
}

// const addPin = function(getCountry){
//   const center = {lat: country.latlng[0], lng: country.latlng[1]}
//   map.addMarker(center)
// }

const saveButtonClicked = function(getCountry){
  const countryToSave = {
    name: country.name,
    latlng: country.latlng,
    region: country.region,
    subregion: country.subregion,
    flag: country.flag
  };
  map.addMarker({lat: country.latlng[0], lng: country.latlng[1]})
  dbRequest.post(createRequestComplete, countryToSave);
};

const createRequestComplete = function(responce){
  countryView.addCountry(country);
  console.log(responce);
}

const deleteRequestComplete = function() {
  countryView.clear();
}

const deleteButtonClicked = function() {
  map.clearMap();
  dbRequest.delete(deleteRequestComplete);
}

const appStart = function(){
  request.get(populateDropDownMenu);
  request.get(getCountry)
  dbRequest.get(getDbRequestComplete)
  const createSaveButton = document.querySelector('#saveButton');
  createSaveButton.addEventListener("click", saveButtonClicked);
  // createSaveButton.addEventListener('click', addPin);
  const deleteButton = document.querySelector('#deleteButton');
  deleteButton.addEventListener("click", deleteButtonClicked);
  initialize();
};

const initialize = function(){
  const container = document.getElementById('mapDiv');
  const centre = {lat: 0, lng: 0};
  const zoom = 2;
  map = new MapWrapper(container, centre, zoom);
}


document.addEventListener('DOMContentLoaded', appStart);
// document.addEventListener('DOMContentLoaded', initialize
