'use strict';

/////////////////
// set up data //
/////////////////

// declare variables

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var stores = [];
var storeList = document.getElementById('storeList');
var newStoreForm = document.getElementById('newStoreForm');

// constructor funciton
function Store(name, minHourlyCust, maxHourlyCust, avgCookiePerSale) {
  this.name = name;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookiePerSale = avgCookiePerSale;

  this.customersPerHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesPerDay;

  stores.push(this);
}

// prototype functions for constructor function
Store.prototype.calcCustomersPerHour = function() {
  for(var i = 0; i < hours.length; i++) {
    this.customersPerHour.push(Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1)) + this.minHourlyCust);
  }
};
Store.prototype.calcCookiesSoldEachHour = function() {
  this.calcCustomersPerHour();

  for(var i = 0; i < hours.length; i++) {
    this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale));
    this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
  }
};
Store.prototype.render = function() {
  this.totalCookiesPerDay = 0;
  this.calcCookiesSoldEachHour();

  var trEl = document.createElement('tr');

  // add name to beginning of table row
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  // add table data for each hour
  for (var i = 0; i < hours.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesSoldEachHour[i];
    trEl.appendChild(tdEl);
  }

  // calculate total cookies
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesPerDay;
  trEl.appendChild(tdEl);

  storeList.appendChild(trEl);
};

// array of stores
new Store('Pike Place', 23, 65, 6.3);
new Store('Sea-Tac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki Beach', 2, 16, 4.6);

//////////////////////
// define behaviors //
//////////////////////

// add header function
function header() {
  var trEl = document.createElement('tr');
  // create empty box in top left
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  // add hours to header
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  // add total to header
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Total';
  trEl.appendChild(thEl);

  storeList.appendChild(trEl);
}

// add footer function
function footer() {
  var hourTotal = [];
  var tfootEl = document.createElement('tfoot');
  // create empty box in bottom left
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Total';
  tfootEl.appendChild(tdEl);
  // calculate and display totals for each hour
  for(var i = 0; i < hours.length; i++) {
    var total = 0;
    for(var x = 0; x < stores.length; x++) {
      total += stores[x].cookiesSoldEachHour[i];
    }

    hourTotal.push(total);

    tdEl = document.createElement('td');
    tdEl.textContent = hourTotal[i];
    tfootEl.appendChild(tdEl);
  }

  // calculate and display total of totals in bottom right
  var totalOfTotals = 0;
  for(var i = 0; i < stores.length; i++) {
    totalOfTotals += stores[i].totalCookiesPerDay;
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalOfTotals;
  tfootEl.appendChild(tdEl);

  storeList.appendChild(tfootEl);
}

// render store rows
function storeRowsFTW() {
  storeList.innerHTML = '';
  header();
  for(var i = 0; i < stores.length; i++){
    stores[i].render();
  }
  footer();
}

// event handler function
function handleNewStore(event) {

  event.preventDefault();

  var name = event.target.name.value;
  var minHourlyCust = parseInt(event.target.minHourlyCust.value);
  var maxHourlyCust = parseInt(event.target.maxHourlyCust.value);
  var avgCookiePerSale = parseInt(event.target.avgCookiePerSale.value);

  for(var i = 0; i < stores.length; i++) {

    if(stores[i].name === name) {
      stores[i].name = name;
      stores[i].minHourlyCust = minHourlyCust;
      stores[i].maxHourlyCust = maxHourlyCust;
      stores[i].avgCookiePerSale = avgCookiePerSale;

      stores[i].customersPerHour = [];
      stores[i].cookiesSoldEachHour = [];
      stores[i].totalCookiesPerDay = 0;

      storeRowsFTW();
      return;
    }
  }

  new Store(name, minHourlyCust, maxHourlyCust, avgCookiePerSale);
  storeRowsFTW();

}

//////////////////
// execute code //
//////////////////

storeRowsFTW();
newStoreForm.addEventListener('submit', handleNewStore);
