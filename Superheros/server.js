const express = require('express');
const app = express();
const superheroes = [{
    name: 'Batman',
    powers: ['flight', 'invulnerability', 'x-ray vision']
  },
  {
    name: "superman",
    powers: ['flight', 'invulnerability', 'x-ray vision']
  },
  {
    name: 'hulk',
    powers: ['flight', 'invulnerability', 'x-ray vision']
  },
];

app.get('/superheroes', (req, res) => {
  res.send(superheroes)
});

app.get('/superheroes/:index', (req, res) => {
  console.log(req.params, '<-- this is req.params');
  res.send(superheroes[req.params.index]);
});




app.listen(3000, () => {
  console.log("Here to save the day...");
});
