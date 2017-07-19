'use strict';

var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

// create header row

function header() {
  var trEl = document.createElement('tr');

  // create empty box in top left
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);

  // add hours to header
  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  // add total to header
  var thEl = document.createElement('th');
  thEl.textContent = 'Daily Total';
  trEl.appendChild(thEl);

  storeList.appendChild(trEl);
}

header();


// constructor funciton for a store

function Store(name, minHourlyCust, maxHourlyCust, avgCookiePerSale) {
  this.name = name;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookiePerSale = avgCookiePerSale;

  this.customersPerHour = [];
  this.calcCustomersPerHour = function() {
    for(var i = 0; i < hours.length; i++) {
      this.customersPerHour.push(Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1)) + this.minHourlyCust);
    }
  };

  this.cookiesSoldEachHour = [];
  this.calcCookiesSoldEachHour = function() {
    this.calcCustomersPerHour();
    for(var i = 0; i < hours.length; i++) {
      this.cookiesSoldEachHour.push(Math.ceil(this.customersPerHour[i] * this.avgCookiePerSale));
      this.totalCookiesPerDay += this.cookiesSoldEachHour[i];
    }
  };

  this.totalCookiesPerDay = 0;
  this.render = function() {
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

  stores.push(this);
}


// array of stores

var stores = [];
new Store('Pike Place', 23, 65, 6.3);
new Store('Sea-Tac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki Beach', 2, 16, 4.6);


// render each row

function storeRowsFTW() {
  for(var i = 0; i < stores.length; i++){
    stores[i].render();
  }
}

storeRowsFTW();


// totals in the footer

var hourTotal = [];

function footer() {
  var trEl = document.createElement('tr');

  // create empty box in bottom left
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Hourly Total';
  trEl.appendChild(tdEl);

  // calculate and display totals for each hour
  for(var i = 0; i < hours.length; i++) {

    var total = 0;
    for(var x = 0; x < stores.length; x++) {
      total += stores[x].cookiesSoldEachHour[i];
    }

    hourTotal.push(total);

    tdEl = document.createElement('td');
    tdEl.textContent = hourTotal[i];
    trEl.appendChild(tdEl);
  }

  // calculate and display total of totals in bottom right
  var totalOfTotals = 0;
  for(var i = 0; i < stores.length; i++) {
    totalOfTotals += stores[i].totalCookiesPerDay;
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalOfTotals;
  trEl.appendChild(tdEl);

  storeList.appendChild(trEl);
}


footer();
