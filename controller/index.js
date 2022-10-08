exports.home = function (req, res) {
    res.render("index", { title: "Home" }); 
}

exports.project = function (req, res) {
    res.render("index", { title: "Projects" }); 
}

exports.about = function (req, res) {
    res.render("index", { title: "About me" }); 
}

exports.service = function (req, res) {
    res.render("index", { title: "Services" }); 
}

exports.contactme = function (req, res) {
    res.render("index", { title: "Contact Me" }); 
}

exports.error = function (req, res) {
    res.render("index", { title: "Error" }); 
}
