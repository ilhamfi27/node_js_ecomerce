//use path module
const path = require('path');

//use express module
const express = require('express');

//use bodyParser middleware
const bodyParser = require('body-parser');

//use hbs view engine
const hbs = require('hbs');

// use router
const router = require('./config/routes');

const app = express();

// use pretty error for better error looking
const PrettyError = require('pretty-error');

// instantiate PrettyError, which can then be used to render error objects
let pe = new PrettyError();
pe.start();

//set dynamic views file
app.set('views', path.join(__dirname,'views'));

//set view engine
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));

//set public folder as static folder for static file
app.use(express.static('public'));

app.use("/", router);

app.listen(8000, () => {
    console.log("The server is running on port 8000");
});
