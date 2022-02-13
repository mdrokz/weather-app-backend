'use strict'
const express = require('express')

const upload = multer({ dest: './images/' });

// Create the express app
const app = express()

const Router = express.Router;

// Routes and middleware
// app.use(/* ... */)
// app.get(/* ... */)

// Error handlers

const router = new Router();

router.post('/upload', upload.single('file'), function (req, res) {

  console.log(req.file, res);

});




app.use('/api', router);

// Start server
app.listen(8080, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log('Started at http://localhost:8080')
})