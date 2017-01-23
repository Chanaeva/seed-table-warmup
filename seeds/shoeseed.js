exports.seed = function(knex, Promise) {

  return knex.raw()
    .then(function () {

      const shoeSeed = [

         {
          id: 1 ,
          style: 'Boots',
          color: 'black',
          brand: 'Steve Madden',
          user_id: 1,
        },

        {
         id: 2 ,
         style: 'Sneakers',
         color: 'grey',
         brand: 'Vans',
         user_id: 2,

        },

        ];

     return knex('shoe').insert(shoeSeed);

   })
 };
