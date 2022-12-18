require('dotenv').config({path: "./vars/.env"});
const express = require('express');
const path = require('path');
const routesProducts = require('./routes/routesProduct');
const routesAccount = require('./routes/routesAccount');
const routesCart = require('./routes/routesCart');
const app = express();
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('_method'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())
// parse application/json
app.use(bodyParser.json())
app.use('/public',express.static(path.join(__dirname,'/public')));
app.use(express.json());
app.use('/api/product' , routesProducts);
app.use('/api/account',routesAccount)
app.use('/api/cart',routesCart)

const PORT = process.env.PORT|| 4000;
app.listen(PORT , () => {
    console.log(`listening on port ${PORT}`);
})


