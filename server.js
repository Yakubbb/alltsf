
const express = require('express')
var fs = require('fs')
const app = express()
const path = require('path')
const port = 3000
app.use('/static',express.static('/views/static'))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.set('view engine', 'ejs');
app.get('/gamepage', (req, res) => {
  res.render('gamePage', {
    name: req.query.name,
    year: req.query.year,
    discr: req.query.discr,
    image: req.query.photo
  });
})
app.get('/', (req, res) => {
  var games = JSON.parse(fs.readFileSync("gamesData.json").toString())
  res.render('games', {
    games: games,
  });
})

app.listen(port, () => {
  console.log(port)
})