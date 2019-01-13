const express = require('express')
const index = express()

index.get('/', (req, res) => {
  res.render('home', { msg: 'Handlebars are Cool!' });
})

index.listen(3000, () => {
  console.log('App listening on port 3000!')
})

// Handlebars Material
var exphbs = require('express-handlebars');

index.engine('handlebars', exphbs({ defaultLayout: 'main' }));
index.set('view engine', 'handlebars');
