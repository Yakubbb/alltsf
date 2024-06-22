
const express = require('express')
var fs = require('fs')
const app = express()
const path = require('path')
const port = 3000
app.use(express.static(path.join(__dirname, '/views/static')));
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
app.get('/addGame', (req, res) => {
  res.render('gameAddpage')
})
app.listen(port, () => {
  console.log(port)
})
app.get('/sendJson', (req, res) => {
  var games = JSON.parse(fs.readFileSync("gamesData.json").toString())
  let name = req.query.name
  let date = req.query.year
  let discr = req.query.discr
  let image = req.query.photo
  games.push({"title": name , "imageUrl": image , "releaseDate":date,"discr":discr})
  fs.writeFile("gamesData.json", JSON.stringify(games), (err) => err && console.error(err));
  res.redirect("/")
})