const express = require('express');
const app     = express();
const PORT = 3000;
const Pokemon = require('./models/pokemon');


app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', (req, res) => {
  res.render('index.ejs', {
    pokemon:Pokemon
  })
});

app.get('/pokemon/:index', (req, res) => {
 res.render('show.ejs', {
   pokemon: Pokemon[req.params.index]
 })
});

app.listen(PORT, () => {
  console.log('listening on port 3000');
})
