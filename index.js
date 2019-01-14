// EXPRESS MODULES & OBJECTS
const express = require('express');
const index = express();
const bodyParser = require('body-parser')
// methodOverride
// process.env.PORT || 3000

// DATABASE
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/toolbox');

const Toolbox = mongoose.model('Toolbox', {
  boxLabel: String,
  description: String
});
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/toolbox', { useNewUrlParser: true });

// MIDDLEWARE, ROUTE CONFIGURATION
index.use(bodyParser.urlencoded({ extended: true }));
// index.use(methodOverride('_method'))


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

// NEW
index.get('/toolboxes/new', (req, res) => {
    res.render('toolboxes-new', {});
})

// CREATE
index.post('/toolboxes', (req, res) => {
    Toolbox.create(req.body).then((toolbox) => {
      console.log(toolbox);
      res.redirect(`/toolboxes/${toolbox._id}`);
    }).catch((err) => {
      console.log(err.message);
    })
})

// SHOW
index.get('/toolboxes/:id', (req, res) => {
    Toolbox.findById(req.params.id).then( toolbox => {
        res.render('toolboxes-show', { toolbox: toolbox});
  }).catch(console.error)})


// EDIT

// UPDATE

// DELETE
index.delete('/toolboxes/:id', function (req, res) {
  console.log("DELETE toolbox")
  Toolbox.findByIdAndRemove(req.params.id).then((toolbox) => {
    res.redirect('/toolboxes');
  }).catch((err) => {
    console.log(err.message);
  })
})

// SERVER START
index.listen(3000, () => {
  console.log('App listening on port 3000!')
})
