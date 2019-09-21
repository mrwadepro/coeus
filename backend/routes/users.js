const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const useremail = req.body.useremail;
    const isadmin = Boolean(req.body.isadmin);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    console.log(username);
    const newUser = new User({
        username,
        useremail,
        isadmin,
        firstname,
        lastname
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;