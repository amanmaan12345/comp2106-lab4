var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Family Introduction',
    message: 'HELLO, Everybody'});
});

//get localhost:3000/amanjot
router.get('/amanjot', function(req, res, next) {
  res.render('amanjot', { title: 'Amanjot',
    message: 'HELLO, My name is Amanjot Singh and today i am going to introduce my family members with you.'});
});

//get localhost:3000/jaswinder
router.get('/jaswinder', function(req, res, next) {
  res.render('jaswinder', { title: 'Mother',
    heading: 'Jaswinder Kaur',
    message: 'Jaswinder is my Mother. Her full name is Jaswinder Kaur and she is a housewife. She likes watch TV serials.'});
});

//get localhost:3000/suman
router.get('/suman', function(req, res, next) {
  res.render('suman', { title: 'Suman',
    message: 'Suman is my sister and she is studying Bachelor of Nursing in India. She is fond of reading books. '});
});

//get localhost:3000/gurjant
router.get('/gurjant', function(req, res, next) {
  res.render('gurjant', { title: 'Father',
    heading: 'Gurjant Singh',
    message: 'My father name is Gurjant Singh and he is a farmer. He is interested in politics and likes reading newspapers.'});
});

module.exports = router;
