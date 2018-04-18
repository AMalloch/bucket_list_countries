const CountryView = function(){
  this.countries = [];
};

CountryView.prototype.addCountry = function (country) {
  this.countries.push(country);
  this.render(country.name);
};

CountryView.prototype.render = function (country) {
  const ul = document.querySelector('#bucketCountries');
  const li = document.createElement('li');
  li.innerText = country;
  ul.appendChild(li)
};

CountryView.prototype.renderList = function (country) {
  const select = document.querySelector('#countryDropDown');
  select.innerText = country.name;
};

CountryView.prototype.clear = function () {
  this.countries = [];
  const ul = document.querySelector('#bucketCountries');
  ul.innerHTML = '';
};


module.exports = CountryView;
