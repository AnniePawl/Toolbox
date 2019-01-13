// EXPRESS MODULES & OBJECTS
const express = require('express');
const index = express();
// bodyParser
// methodOverride
// process.env.PORT || 3000

// DATABASE
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/toolbox', { useNewUrlParser: true });

// ROUTES
// Import Toolbox Model
// const Toolbox = require('./models/toolbox');
// Import Category Model
// const Category = require('./models/category');

// HANDLEBARS MATERIAL
var exphbs = require('express-handlebars');

index.engine('handlebars', exphbs({defaultLayout: 'main' }));
index.set('view engine', 'handlebars');

// INDEX
index.get('/', (req, res) => {
  res.render('home', { msg: 'It Works!' });
})

// MOCK BOXES (for testing)
let toolboxes = [
  { title: "Make School", boxLabel: "Make School!" },
  { title: "Personal", boxLabel: "Personal Box" }
]

// INDEX
index.get('/toolboxes', (req, res) => {
  res.render('toolboxes-index', { toolboxes: toolboxes  });
})


// MIDDLEWARE, ROUTE CONFIGURATION
// index.use(bodyParser.urlencoded({ extended: true }));
// index.use(methodOverride('_method'))

// IMPORT ROUTES
// const toolbox = require('./controllers/toolboxes')(app);
// const category = require('./controllers/categories')(app);


// SERVER START
index.listen(3000, () => {
  console.log('App listening on port 3000!')
})
