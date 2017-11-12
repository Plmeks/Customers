var express = require('express');
var router = express.Router();
var customersController = require('../middleware/controllers/customers');


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
  customersController.getCustomers(customers => res.json(customers));
});

router.get('/customers/:id', function(req, res, next) {
  customersController.getCustomer(req.params.id, customer => res.json(customer));
});

router.put('/customers', function(req, res, next) {
  customersController.updateCustomer(req.body, updatedCustomer => res.json(updatedCustomer));
});

router.post('/customers', function(req, res, next) {
  customersController.addCustomer(req.body, addedCustomer => res.json(addedCustomer));
});

router.delete('/customers/:id', function(req, res, next) {
  customersController.deleteCustomer(req.params.id, result => res.json(result));
});



module.exports = router;