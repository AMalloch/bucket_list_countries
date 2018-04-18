const Request = require('./services/request.js');
const request = new Request('https://restcountries.eu/rest/v2/all');



const appStart = function(){
populateList(countries);
}


document.addEventListener('DOMContentLoaded', appStart);
