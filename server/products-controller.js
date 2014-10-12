var express = require('express');
var bodyParser = require('body-parser');

var products = [
    {
        name: "Basketball", description: "IU Branded",
        category: "Game Balls", price: 20
    },
    {
        name: "Football", description: "Purdue Branded",
        category: "Game Balls", price: 35
    }
];

module.exports = function(app) {
    app.use(bodyParser());

    app.get('/products', function(req, res) {
        console.log('getting all products on server');
        res.json(products);
    });

    app.post('/products', function(req, res) {
        console.log('add new product on server: ' + JSON.stringify(req.body));
        products.push(req.body);
        res.json(products);
    });

    app.post('/products/remove', function(req, res) {
        console.log('deleting product on server with index: ' + req.body.index);
        products.splice(req.body.index, 1);
        res.json(products);
    });
};