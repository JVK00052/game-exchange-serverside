require('dotenv').config();

var express = require('express');
var app = express();

var sequelize = require('./db');

var bodyParser = require('body-parser');

var auth = require('./controllers/authcontroller');
var product = require('./controllers/productcontroller');
var profile = require('./controllers/profilecontroller');
var payment = require('/controllers/paymentcontroller')

sequelize.sync()

app.use(require('./middleware/headers'));
app.use(bodyParser.json());

app.use('/user', auth);
app.use(require('./middleware/validate-session'));
app.use('/product', product);
app.use('/profile', profile);
app.use('/payment', payment)
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`)
})
