const Request = require('./services/request.js');
const request = new Request('https://restcountries.eu/rest/v2/all');

const CountryView = require('./views/countryView.js')

const countryView = new CountryView();


const populateDropDownMenu = function(allCountries){
  const select = document.querySelector('#countryDropDown');
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
    let country = countries[this.value];
    return country;
  })
}


const saveButtonClicked = function(getCountry){
  const countryToSave = getCountry;
  debugger;
  request.post(saveButtonClicked, countryToSave);
  countryView.addCountry(countryToSave);
}


const appStart = function(){
  request.get(populateDropDownMenu);
  request.get(getCountry)
  const createSaveButton = document.querySelector('#saveButton');
  createSaveButton.addEventListener("click", saveButtonClicked);
}




document.addEventListener('DOMContentLoaded', appStart);
