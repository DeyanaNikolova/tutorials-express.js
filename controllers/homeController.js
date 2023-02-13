const homeController = require('express').Router();

// TODO: replase with real controller by assignemt

homeController.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        user: req.user
    });
});

module.exports = homeController;