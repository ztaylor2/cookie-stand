'use strict';

// object literals

var firstPike = {
  name: '1st and Pike',
  minHourlyCust: 23,
  maxHourlyCust: 65,
  avgCookiePerSale: 6.3,
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],

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

    // this will render the data to the dom
    // will need a for loop to iterate over the array
      for (var i = 0; i < this.hour.length; i++) {
      // there are three parts to this process
      // 1. create an element
      var liEl = document.createElement('li');
      // 2. give it content
      liEl.textContent = this.hour[i] + ': ' + Math.round(this.numCookies()) + ' cookies';
      // 3. append it to a certain place in the dom
      // parentElement.appendChild(childElement)
      firstPikeUL.appendChild(liEl);
    }
  }
};

firstPike.render();
