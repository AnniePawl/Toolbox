// EXPRESS MODULES & OBJECTS
const express = require('express');
const index = express();
// bodyParser
// methodOverride
// process.env.PORT || 3000

// DATABASE

// ROUTES
// Import Toolbox Model
// const Toolbox = require('./models/toolbox');
// Import Category Model
// const Category = require('./models/category');

// HANDLEBARS MATERIAL
var exphbs = require('express-handlebars');
index.engine('handlebars', exphbs({defaultLayout: 'main' }));
index.set('view engine', 'handlebars');

// MIDDLEWARE, ROUTE CONFIGURATION
// index.use(bodyParser.urlencoded({ extended: true }));
// index.use(methodOverride('_method'))

index.get('/', (req, res) => {
  res.render('home', { msg: 'Handlebars are Cool!' });
})

index.listen(3000, () => {
  console.log('App listening on port 3000!')
})
