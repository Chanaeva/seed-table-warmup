const bcrypt = require('bcrypt');

var hash = bcrypt.hashSync('password', 4);


exports.seed = function(knex, Promise) {

  return knex.raw('DELETE FROM "user"; ALTER SEQUENCE user_id_seq RESTART WITH 1')
    .then(function () {

      const userSeed = [

         {
          id: 1 ,
          name: 'Chana',
          email: 'chana@gmail.com',
          password: hash,
        },

        {
         id: 2 ,
         name: 'Ryder',
         email: 'Ryder@gmail.com',
         password: hash,

        },

        ];

     return knex('user').insert(userSeed);

   })
 };
