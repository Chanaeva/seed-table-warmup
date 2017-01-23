
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shoe', function(table) {
    table.increments()
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
    table.text('style').notNullable();
    table.text('color').notNullable();
    table.text('brand').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('shoe');
};
