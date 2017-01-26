'use strict'

var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const env = 'development';
const bcrypt = 'bcrypt'




// router.get('/user', (req, res, next) => {
//     knex('user')
//         .then(function(data) {
//             res.json(data);
//         });
// });

// router.post('/signup', (req, res, next) => {
//     var hash = bcrypt.hashSync(req.params.password, 4);
//     user().insert({
//         email: req.params.email,
//         password: hash
//     }, 'id').then(function(result) {
//         res.send(result);
//     });
// })



// router.post('/', (req, res, next) => {
//     knex('user').where({
//             email: req.body.email,
//         }).first()
//         .then(function(user) {
//             if (user) {
//                 if (bcrypt.compareSync(req.body.password, user.password)) {
//                     req.session.user = user.email;
//                     res.redirect('/');
//                 } else {
//                     res.redirect('/signin');
//                 }
//             } else {
//                 res.redirect('signin')
//             }
//         });
// });


module.exports = router;
