exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw()
    .then(function () {

      const userSeed = [

         {
          id: 1 ,
          name: 'Chana',
          email: 'chana@gmail.com',
          password: 'poopypants',
        },

        {
         id: 2 ,
         name: 'Ryder',
         email: 'Ryder@gmail.com',
         password: 'fartface',

        },

        ];

     return knex('user').insert(userSeed);

   })
 };