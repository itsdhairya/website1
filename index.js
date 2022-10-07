let express = require('express');
let app = express();

app.set('view engine', 'ejs');

// console.log('hello world');
app.get('/', function(req, res, next) { 
    res.render('pages/home')
});

app.get('/about', (req, res,)=> { 
    res.render('pages/about')
});

app.listen(3000);
