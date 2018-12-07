var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Payment = sequelize.import('../models/payment');

router.post('/createnew', function (req, res) {
    Payment.create({
        owner: req.user.id,
        nameOfCompany: req.body.payment.nameOfCompany,
        cardNumber: req.body.payment.cardNumber,
        cardVerificationCode: req.body.payment.cardVerificationCode,
        expirationDate: req.body.payment.expirationDate,
        cardOwner: req.body.payment.cardOwner,
    }).then(
        function createSuccess(payment) {
            res.status(200).json({
                payment: payment,
                message: 'Your payment method has been added.'
            })
        },
        function createError(err) {
            res.status(500).send('something went wrong, please try again.')
        });
});

router.get('/getall', function (req, res) {
    Payment.findAll()
        .then(
            function findAllSuccess(payment) {
                res.status(200).json({ payment })
            });
});

router.put('/edit/:id', function (req, res) {
    Payment.update(req.body.payment, { where: { id: req.params.id } })
        .then(payment => res.status(200).json(payment))
        .catch(err => res.json(req.errors))
});

router.delete('/delete/:id', function (req, res) {
    Payment.findById(req.params.id).then(payment => {
        if (payment === undefined) {
            res.send(500, 'Payment method not found, please try again.')
        } else {
            Payment.destroy({
                where: {
                    id: req.params.id
                }
            }).then(
                function deleteSuccess(payment) {
                    res.status(200).json({
                        payment: payment,
                        message: 'Payment method deleted.'
                    })
                },
                function deleteError(err) {
                    res.status(500).send('Something went wrong, please try again.')
                });
        }
    });
});

module.exports = router;