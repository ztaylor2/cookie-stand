'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


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

    var tdEl = document.createElement('td');
    tdEl.textContent = this.name;
    trEl.appendChild(tdEl);

    for (var i = 0; i < hours.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = hours[i] + ': ' +this.cookiesSoldEachHour[i];
      trEl.appendChild(tdEl);
    }

    tdEl = document.createElement('td');
    tdEl.textContent = 'Total: ' + this.totalCookiesPerDay;
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
