var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Product = sequelize.import('../models/product');

router.post('/createnew', function(req, res) {
    Product.create({
        nameOfProduct: req.body.product.nameOfProduct,
        typeOfProduct: req.body.product.typeOfProduct,
        companyName: req.body.product.companyName,
        priceOfProduct: req.body.product.priceOfProduct,
        quantity: req.body.product.quantity,
    }).then(
        function createSuccess(product) {
            res.status(200).json({
                product: product,
                message: 'Product successfully added to inventory.'
            })
        },
        function createError(err) {
            res.status(500).send('Something went wrong, please try again.')
        }
    );
});

router.get('/getall', function (req, res) {
    Product.findAll()
    .then(
        function findAllSuccess(product) {
            res.status(200).json({product})
        }
    );
});

router.put('/edit/:id', function (req, res) {
    Product.update(req.body.product, { where: { id: req.params.id } } )
    .then(product => res.status(200).json(product))
    .catch(err => res.json(req.errors))
});

router.delete('/delete/:id', function (req, res) {
    Product.findById(req.params.id).then(product => {
        if (product === undefined) {
            res.send(500, 'Product not found, please try again.')
        } else {
            Product.destroy({
                where: {
                    id: req.params.id
                }
            }).then(
                function deleteSuccess(product) {
                    res.status(200).json({
                        product: product,
                        message: 'Product removed from inventory.'
                    });
                },
                function deleteError(err) {
                    res.status(500).send('Something went wrong, please try again.')
                });
        }
    });
});

module.exports = router;