const express = require('express')
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/public'));


//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');






app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Francisco"
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log('escuchando brou', port);
});