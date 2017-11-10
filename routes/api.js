var express = require('express');
var router = express.Router();

var customers = [{
  id: 1,
  name: 'Maksim Pliusch'
}, {
  id: 2,
  name: 'Anastasiya Plahina'
}, {
  id: 3,
  name: 'Shmidt Vasily'
}, {
  id: 4,
  name: 'Ngo-Ma'
}];

/* GET users listing. */
router.get('/customers', function(req, res, next) {
  res.json(customers);
});

router.get('/customers/:id', function(req, res, next) {
  res.json(customers.find(customer => parseInt(req.params.id) === customer.id));
});

router.put('/customers', function(req, res, next) {
  customers.find(customer => customer.id === req.body.id).name = req.body.name;
  res.json({ message: 'Customer updated!' });
});



module.exports = router;
