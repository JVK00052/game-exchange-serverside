var express = require('express');
var router = express.Router();
var sequelize = require('../db');
var Profile = sequelize.import('../models/profile');

router.post('/createnew', function(req, res) {
    Profile.create({
        owner: req.user.id,
        firstName: req.body.profile.firstName,
        lastName: req.body.profile.lastName,
        screenName: req.body.profile.screenName,
        email: req.body.profile.email,
        phoneNumber: req.body.profile.phoneNumber,
    }).then(
        function createSuccess(profile) {
            res.status(200).json({
                profile: profile,
                message: 'Your profile has been created.'
            })
        },
        function createError(err) {
            res.status(500).send('Something went wrong, please try again.')
        });
});

router.get('/getall', function (req, res) {
    Profile.findAll()
    .then(
        function findAllSuccess(profile) {
            res.status(200).json({profile})
        });
});

router.put('/edit/:id', function (req, res) {
    Profile.update(req.body.profile, { where: { id: req.params.id } } )
    .then(profile => res.status(200).json(profile))
    .catch(err => res.json(req.errors))
});

router.delete('/delete/:id', function (req, res) {
    Profile.findById(req.params.id).then(profile => {
        if (profile === undefined) {
            res.send(500, 'Profile not found, please try again.')
        } else {
            Profile.destroy({
                where: {
                    id: req.params.id
                }
            }).then(
                function deleteSuccess(profile) {
                    res.status(200).json({
                        profile: profile,
                        message: 'Profile deleted.'
                    });
                },
                function deleteError(err) {
                    res.status(500).send('Something went wrong, please try again.')
                });
        }
    });
});

module.exports = router;