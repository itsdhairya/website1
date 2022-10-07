let express = require('express');
let app = express();

app.set('view engine', 'ejs');

// console.log('hello world');
app.get('/', function(req, res, next) { 
    const student = {
        name: 'Dhairya Brahmbhatt',
        email: 'dhairya@gmail.com',
        description: "Inquisitive, energetic computer science specialist skilled in leadership with a strong foundation in math, logic, and cross-platform coding. I am seeking to leverage solid skills in collaboration, communication, and development as an administrative assistant.Passionate about analyzing service and product lines to maximize revenue. Have a B.A in Business Management. Skilled financial analysis, risk analysis, and pay great attention to detail."
    }
    res.render('pages/home' ,{students:student})
});

app.get('/about', (req, res,)=> { 
    res.render('pages/about')
});

app.get('/project', (req, res,)=> { 
    res.render('pages/project')
});

app.get('/service', (req, res,)=> { 
    res.render('pages/service')
});
app.listen(3000);
