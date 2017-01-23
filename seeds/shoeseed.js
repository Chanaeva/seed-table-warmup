exports.seed = function(knex, Promise) {

  return knex.raw('DELETE FROM "shoe"; ALTER SEQUENCE shoe_id_seq RESTART WITH 1')
    .then(function () {

      const shoeSeed = [

         {
          style: 'Boots',
          color: 'black',
          brand: 'Steve Madden',
          user_id: 1,
        },

        {

         style: 'Sneakers',
         color: 'grey',
         brand: 'Vans',
         user_id: 2,

        },

        ];

     return knex('shoe').insert(shoeSeed);

   })
 };
