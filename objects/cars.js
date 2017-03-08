var cars = [{
  model: 'Honda',
  price_per_day: 50
}, {
  model: 'BMW',
  price_per_day: 100
}, {
  model: 'Benz',
  price_per_day: 95
}, {
  model: 'Toyota',
  price_per_day: 60
}];

var affordable_cars = [];

for (var i=0; i < cars.length; i++) {
  if (cars[i].price_per_day <= 75) {
    affordable_cars.push(cars[i]);
  }
}

var person = {
  name: 'Sam Cooke',
  greet: function () {
    console.log(`Hi my name is ${this.name}`);
    // console.log('Hi my name is' + person.name);
  }
};




var isWorthIt = function(threshold) {
if (this.price / this.hours <= threshold) {
  return true;
} else {
  return false;
}
// simpler version: return ratio <= threshold; if less than or equal, true; otherwise, false
};

var courses = [{
  title: 'Coding 101',
  hours: 20,
  price: 500,
  isWorthIt: isWorthIt
}, {
  title: 'Coding 201',
  hours: 50,
  price: 300,
  isWorthIt: isWorthIt
}];

console.log(courses[0].isWorthIt(50));


