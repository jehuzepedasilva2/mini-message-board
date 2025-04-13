const express = require('express');
const path = require('node:path');
require('dotenv').config();

const app = express();

// first lets add the views property to our app, and view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// for css files, express.static() is a middleware function that enables the use of static assets, 
// and we tell it to look for assets with the public directory as the root.
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));


app.get('/', (req, res) => {
  res.render('index');
});

app.listen(process.env.PORT, () => {
  console.log('Server running...');
});