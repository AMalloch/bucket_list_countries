const CountryView = function(){
  this.countries = [];
};

CountryView.prototype.addCountry = function (country) {
  if(this.countries.includes(country)){
    return;
  }
  this.countries.push(country);
  this.render(country);
};

CountryView.prototype.render = function (country) {
  const ul = document.querySelector('#bucketCountries');
  const liName = document.createElement('li');
  const imgFlag = document.createElement('IMG');
  liName.innerText = country.name;
  imgFlag.setAttribute("src", country.flag);
  imgFlag.setAttribute("width", "30");
  imgFlag.setAttribute("height", "20");
  ul.appendChild(liName)
  ul.appendChild(imgFlag)
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
