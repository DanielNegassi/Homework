// Homework: Modules
// your task is to make a module (Car.js) that defines a car – with both properties and methods (functions) – and export it as a module to an index.js file.
// In the Car.js file:
//
// Properties should include:
//
// color, convertible (boolean), speed (0, at first)
// Functions specs:
//
// include accelerate and decelerate
// these should take one argument, the speed, and add or substract it the from the current speed
// return a string with the old speed and new speed
// call these functions at the bottom of the file

const car = module.exports = {
	color: 'black',
	convertible: false,
	speed: 10,
	accelerate () {
		console.log(this.speed + " is the speed before accelerating");
		this.speed += 50;
		console.log(this.speed + " is the speed after accelerating");
	},
	decelerate () {
		console.log(this.speed + " is the speed before decelerating");
		this.speed -= 20;
		console.log(this.speed + " is the speed after decelerating");
	},
};

car.accelerate();
car.decelerate();
