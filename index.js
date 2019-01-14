// EXPRESS MODULES & OBJECTS
const express = require('express');
const index = express();
// bodyParser
// methodOverride
// process.env.PORT || 3000

// DATABASE
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/toolbox');

const Toolbox = mongoose.model('Toolbox', {
  title: String,
  boxLabel: String
});
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

// INDEX
index.get('/toolboxes', (req, res) => {
    Toolbox.find()
      .then(toolboxes => {
        // Executed when promise resolves
        res.render('toolboxes-index', { toolboxes: toolboxes });
      })
      .catch(err => {
        console.log(err);
      })
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
