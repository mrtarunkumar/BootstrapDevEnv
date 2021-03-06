var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();

app.use('/js', express.static(__dirname + '/public/scripts'));
app.use('/css', express.static(__dirname + '/public/css'));

app.set('views', path.join(__dirname + '/views/'));
app.engine('.hbs', exphbs({extname:'.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

app.get('/', function(req, res){
    res.render('home');
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});