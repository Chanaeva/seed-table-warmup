'use strict';

var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const env = 'development';




router.get('/', (req, res, next) => {
    knex('shoe')
        .then(function(shoe) {
            res.json(shoe);
    });
});

router.post('/', (req, res, next) => {
   knex('shoe')
        .returning('id')
         .then(function(id) {
           res.json({'message':'cool'});
     });
});

router.put('/shoe/:id', (req, res, next) => {
    knex('shoe')
        .where('id', req.params.id)
        .update(req.body)
        .then(function(data) {
            res.json(data);
      })
})


router.delete('/shoe/:id', (req, res, next) => {
    knex('shoe')
        .where('id', req.params.id)
        .del()
        .then(function() {
            res.redirect('/');
      })
})





module.exports = router;
