
const express = require('express')
const app = express()
const path = require('path');
const port = 3000
app.use(express.static(path.join(__dirname, 'views/static')));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('gamePage', {
    name: req.query.name,
    year: req.query.year,
    discr: req.query.discr
  });
})

app.listen(port, () => {
  console.log(port)
})