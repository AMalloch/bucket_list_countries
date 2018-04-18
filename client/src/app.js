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


const appStart = function(){
  request.get(populateDropDownMenu);
}




document.addEventListener('DOMContentLoaded', appStart);
