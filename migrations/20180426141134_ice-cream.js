exports.up = function(knex, Promise) {
  return knex.schema.createTable('ice_cream', function(table) {
    table.increments()
    table.varchar('name', 255).notNullable().defaultTo('')
    table.varchar('flavor_profile', 255).notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ice_cream')
}
