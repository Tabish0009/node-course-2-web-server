const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


// app.use((req, res, next) => {
//     var now = new Date().toString();
//     console.log(`${now}: ${req.method} ${req.url}`);
//     var log = `${now}: ${req.method} ${req.url}`;
//     fs.appendFile('server.log', log + '\n', (err) =>{
//         if(err){
//             console.log('Unable to append to server.log');
//         }
//     })
//     next();
// });

app.use((req, res, next) => {
    res.render('maintainance.hbs');
});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

// app.get('/', (req, res) => {
//     // res.send('<h1>Hello World!</h1>');
//     res.json({
//         name: "tabish",
//         likes: [
//             "Cricket",
//             "Football",
//             "Hockey"
//         ]
//     });
// });


app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: "welcome to home page"
        //currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        welcomeMessage: "welcome to about page"
        //currentYear: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});