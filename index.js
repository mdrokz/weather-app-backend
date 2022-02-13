'use strict'
const express = require('express');

const multer = require('multer');

const fs = require('fs');

const upload = multer({
  dest: './images/'
});

const generate_short_url = require('./chars.js');

// Create the express app
const app = express()

const Router = express.Router;

// Routes and middleware
// app.use(/* ... */)
// app.get(/* ... */)

// Error handlers

const router = new Router();

const base_url = 'http://localhost:8080/api/'

const url_data = {};

router.post('/upload', upload.single('image'), function (req, res) {


  const short = generate_short_url();

  url_data[short] = {
    original: req.file.originalname,
    url: req.file.filename
  }

  console.log(req.file);

  res.json(`${base_url}images/${short}`);

});

router.get('/images/:code', function (req, res) {

  const url = url_data[req.params.code].url;

  const image = fs.readFileSync(`./images/${url}`)
  
  res.attachment(url.original);
  res.send(image)

  res.end()


});


app.use('/api', router);

// Start server
app.listen(8080, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log('Started at http://localhost:8080')
})