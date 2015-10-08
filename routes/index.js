var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FEI WANG',
                        message: 'My Portfolio'});
});

/* GET About Me page */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Me'});
});

/* GET Projects page */
router.get('/project', function(req, res, next) {
    res.render('project', { title: 'Projects'});
});

/* GET Services page */
router.get('/service', function(req, res, next) {
    res.render('service', { title: 'Services'});
});

/* GET Contact page */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Me'});
});

module.exports = router;
