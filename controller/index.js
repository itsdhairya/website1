exports.home = function(req, res, next) {
    res.render('index', { 
        title: 'Home',
    });
};

exports.aboutme = function(req, res, next) {
    res.render('aboutme', { 
        title: 'About Me',
     });
}

exports.projects = function(req, res, next) {
    res.render('projects', { 
      title: 'Projects',
    });
}

