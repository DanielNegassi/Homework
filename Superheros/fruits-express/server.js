const express = require('express');
const app     = express();

// require Our Model
// The model should capitalized
const Fruits = require('./models/fruits');


// Creating the index route
// index route should show all the fruits
app.get('/fruits', (req, res) => {
  res.send(Fruits)
});


// what were tying to do
// localhost:3000/fruits/0 --> apple

// We are going to use query params
// to act like a variable which, can be
// sent over by the client

// The Show route --> This route always show's one item
// from the model


//show route
app.get('/fruits/:index', (req, res) => {

  // Render is when you want to send
  //an ejs template to the client
 res.render('show.ejs', {
   fruit: Fruits[req.params.index]// This creates a 'fruits' variable in the show page
 })
});





  // console.log(req.params, '<-- this is req.params')
  // res.send(Fruits[req.params.index]);
// });







app.listen(3000, () => {
  console.log('listening on port 3000');
});
