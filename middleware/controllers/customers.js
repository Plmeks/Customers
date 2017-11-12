var customersModel = require('../models/customers');

var getCustomers = function(callback) {
    customersModel.find(function(err, customers) {
        if (err) return console.error(err);
        callback(customers);
    });
};

var getCustomer = function(id, callback) {
    customersModel.findOne({id: id}, function(err, customer) {
        if(err) return console.log(err);
        callback(customer);
    } );
};

var updateCustomer = function(body, callback) {
    customersModel.findOne({id: body.id}, function(err, customer) {
        if(err) return console.log(err);
        
        customer.name = body.name;
        customer.save(function(err, updatedCustomer){
            if(err) return console.log(err);

            callback(updatedCustomer);
        });
    });
}

var addCustomer = function(body, callback) {
    
    customersModel.find(function(err, customers) {
        if(err) return console.log(err);

        var customer = new customersModel({
            id: customers.length + 1,
            name: body.name
        });

        customer.save(function(err, addedCustomer) {
            if(err) return console.log(err);
    
            callback(addedCustomer);
        });
    });
}

var deleteCustomer = function(id, callback) {
    customersModel.remove({ id: id}, function(err) {
        if(err) return console.log(err);
        callback({message: "removed"});
    });
}


module.exports = {
    getCustomers,
    getCustomer,
    updateCustomer,
    addCustomer,
    deleteCustomer
}; 