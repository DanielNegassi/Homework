// 1. Require your node modules
const mongoose = require('mongoose');
const db = mongoose.connection;
// 2. Require your model (and possibly your extra data source);
const Vampire = require('./models/vampire');
const VampireData = require('./populateVampire');
// 3. Connect your database and collection name
mongoose.connect('mongodb://localhost:27017/populateVampire');
// 4. Open your mongoose connection
db.on('error', (err) => {
	console.log(err, ' this is the error message');
});

db.on('connected', () => {
	console.log('vampire_app is connected to mongodb');
});
/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

// Note: Remember to close your connection after you add, update, remove from your database
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you
Vampire.collection.insertMany(VampireData,(err, data) => {
    console.log("added provided vampire data")
    mongoose.connection.close();
  });
// ### Add some new vampire data
// Vampire.create({
// 	name:'Timothy',
// 	hair_color: 'blonde',
// 	eye_color:'brown',
// 	dob:new Date(1990, 09, 24, 6, 45),
// 	loves: ['jellyfish', 'ciggaretes'],
// 	location: 'Austin, Texas, US',
// 	gender: 'm',
// 	victims:2,
// }, (err, vampire) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampire);
// 	};
// });
//
// Vampire.create({
// 	name: 'Daniel',
// 	hair_color: 'black',
// 	eye_color: 'brown',
// 	dob:new Date(1990, 09, 29, 4, 25),
// 	loves: ['drinking', 'girls'],
// 	location: 'Austin, Texas, US',
// 	gender:'m',
// 	victims: 7,
// }, (err, vampire) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampire);
// 	};
// });
//
// Vampire.create({
// 	name: 'Jessamyn',
// 	hair_color: 'brown',
// 	eye_color: 'Hazel',
// 	dob: new Date(1981, 3, 5, 6, 27),
// 	loves: ['shopping', 'rousseau'],
// 	location: 'Austin, Texas, US',
// 	gender:'f',
// 	victims: 5,
// }, (err, vampire) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampire);
// 	};
// });
//
// Vampire.create({
// 	name: 'Sarah',
// 	hair_color: 'brown',
// 	eye_color: 'Hazel',
// 	dob: new Date(1988, 10, 03, 5, 31),
// 	loves: ['running', 'shopping'],
// 	location: 'Austin, Texas, US',
// 	gender: 'f',
// 	victims: 5,
// }, (err, vampire) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(vampire);
// 	};
// });
/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find( {gender: { $eq: 'f' } },
// 	(err, response) => {
// 		console.log(response);
// 	}
// );

// Vampire.find( {victims: { $gt: 500 } },
// 	(err, response) => {
// 		console.log(response);
// 	}
// );

// Vampire.find( {victims: { $lte: 150 } },
// 	(err, response) => {
// 		console.log(response);
// 	}
// );

// Vampire.find( {victims: { $ne: 210234 } } );

// Vampire.find( {victims: { $gt: 150, $lt: 500 } },
// 	(err, response) => {
// 		console.log(response);
// 	}
// );
/////////////////////////////////////////////////
// ### Select by exists or does not exist

/////////////////////////////////////////////////
// ### Select with OR

/////////////////////////////////////////////////
//### Select objects that match one of several values

/////////////////////////////////////////////////
//### Negative Selection

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REPLACE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## UPDATE

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// ## REMOVE

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// ## HUNGRY FOR MORE
/////////////////////////////////////////////////
//## Select objects that match one of several values

/////////////////////////////////////////////////
//## Negative Selection

/////////////////////////////////////////////////
