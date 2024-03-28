const express = require('express')
const app = express()
const hbs = require('hbs');

//Variables de entorno
require('dotenv').config();

//HBS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Midleware
//Servir contenido estatico
app.use(express.static('public'));

//Rutas
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jossue Jativa',
        curso: 'Node.js'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Generico',
        curso: 'Node.js'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Elementos',
        curso: 'Node.js'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/templates/404.html');
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});