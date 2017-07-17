'use strict';


// first and pike

var firstPike = {
  name: '1st and Pike',
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookiePerSale: 6.3,
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesPurchased: [],
  totalCookies: 0,

  // generate random number for customer per hour
  custPerHour: function() {
    return Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust));
  },

  // calculate number of cookies sold in a given hour
  numCookies: function() {
    return this.avgCookiePerSale * this.custPerHour();
  },

  // render cookies sold for each hour to DOM
  render: function() {
    var firstPikeUL = document.getElementById('firstAndPike');

    for (var i = 0; i < this.hour.length; i++) {
      this.cookiesPurchased.push(Math.round(this.numCookies()));
      var liEl = document.createElement('li');
      liEl.textContent = this.hour[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      firstPikeUL.appendChild(liEl);
    }

    // calculate the total number of cookies
    for (var i = 0; i < this.cookiesPurchased.length; i++) {
      this.totalCookies += this.cookiesPurchased[i];
    }
    // display total number of cookies to the DOM
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    firstPikeUL.appendChild(liEl);

  }
};

firstPike.render();


// seaTac

var seaTac = {
  name: 'seaTac',
  minHourlyCust: 3,
  maxHourlyCust: 24,
  avgCookiePerSale: 1.2,
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesPurchased: [],
  totalCookies: 0,

  // generate random number for customer per hour
  custPerHour: function() {
    return Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust));
  },

  // calculate number of cookies sold in a given hour
  numCookies: function() {
    return this.avgCookiePerSale * this.custPerHour();
  },

  // render cookies sold for each hour to DOM
  render: function() {
    var seaTacUL = document.getElementById('seaTac');

    for (var i = 0; i < this.hour.length; i++) {
      this.cookiesPurchased.push(Math.round(this.numCookies()));
      var liEl = document.createElement('li');
      liEl.textContent = this.hour[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      seaTacUL.appendChild(liEl);
    }

    // calculate the total number of cookies
    for (var i = 0; i < this.cookiesPurchased.length; i++) {
      this.totalCookies += this.cookiesPurchased[i];
    }
    // display total number of cookies to the DOM
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    seaTacUL.appendChild(liEl);

  }
};

seaTac.render();


// Seattle Center

var seattleCenter = {
  name: 'seattleCenter',
  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgCookiePerSale: 3.7,
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesPurchased: [],
  totalCookies: 0,

  // generate random number for customer per hour
  custPerHour: function() {
    return Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust));
  },

  // calculate number of cookies sold in a given hour
  numCookies: function() {
    return this.avgCookiePerSale * this.custPerHour();
  },

  // render cookies sold for each hour to DOM
  render: function() {
    var seattleCenterUL = document.getElementById('seattleCenter');

    for (var i = 0; i < this.hour.length; i++) {
      this.cookiesPurchased.push(Math.round(this.numCookies()));
      var liEl = document.createElement('li');
      liEl.textContent = this.hour[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      seattleCenterUL.appendChild(liEl);
    }

    // calculate the total number of cookies
    for (var i = 0; i < this.cookiesPurchased.length; i++) {
      this.totalCookies += this.cookiesPurchased[i];
    }
    // display total number of cookies to the DOM
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    seattleCenterUL.appendChild(liEl);

  }
};

seattleCenter.render();


// Capitol Hill

var capHill = {
  name: 'capHill',
  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgCookiePerSale: 2.3,
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesPurchased: [],
  totalCookies: 0,

  // generate random number for customer per hour
  custPerHour: function() {
    return Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust));
  },

  // calculate number of cookies sold in a given hour
  numCookies: function() {
    return this.avgCookiePerSale * this.custPerHour();
  },

  // render cookies sold for each hour to DOM
  render: function() {
    var capHillUL = document.getElementById('capHill');

    for (var i = 0; i < this.hour.length; i++) {
      this.cookiesPurchased.push(Math.round(this.numCookies()));
      var liEl = document.createElement('li');
      liEl.textContent = this.hour[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      capHillUL.appendChild(liEl);
    }

    // calculate the total number of cookies
    for (var i = 0; i < this.cookiesPurchased.length; i++) {
      this.totalCookies += this.cookiesPurchased[i];
    }
    // display total number of cookies to the DOM
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    capHillUL.appendChild(liEl);

  }
};

capHill.render();


// Capitol Hill

var alki = {
  name: 'alki',
  minHourlyCust: 2,
  maxHourlyCust: 16,
  avgCookiePerSale: 4.6,
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookiesPurchased: [],
  totalCookies: 0,

  // generate random number for customer per hour
  custPerHour: function() {
    return Math.floor((Math.random() * (this.maxHourlyCust - this.minHourlyCust) + this.minHourlyCust));
  },

  // calculate number of cookies sold in a given hour
  numCookies: function() {
    return this.avgCookiePerSale * this.custPerHour();
  },

  // render cookies sold for each hour to DOM
  render: function() {
    var alkiUL = document.getElementById('alki');

    for (var i = 0; i < this.hour.length; i++) {
      this.cookiesPurchased.push(Math.round(this.numCookies()));
      var liEl = document.createElement('li');
      liEl.textContent = this.hour[i] + ': ' + this.cookiesPurchased[i] + ' cookies';
      alkiUL.appendChild(liEl);
    }

    // calculate the total number of cookies
    for (var i = 0; i < this.cookiesPurchased.length; i++) {
      this.totalCookies += this.cookiesPurchased[i];
    }
    // display total number of cookies to the DOM
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies + ' cookies';
    alkiUL.appendChild(liEl);

  }
};

alki.render();
