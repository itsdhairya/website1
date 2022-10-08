var express = require('express');
var router = express.Router();

function requireAuth(req, res, next)
{
    // Check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/user/signin');
    }
    next();
}
