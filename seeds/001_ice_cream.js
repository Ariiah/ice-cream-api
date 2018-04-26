exports.seed = function(knex, Promise) {
  return knex('ice_cream').del()
    .insert([{
      id: 1,
      name: 'Vanilla',
      flavor_profile: 'smooth and bean-y'
    }, {
      id: 2,
      name: 'chocolate',
      flavor_profile: 'the best'
    }, {
      id: 3,
      name: 'strawberry',
      flavor_profile: 'fruity'
    }])
    .then(() => {
      return knex.raw("SELECT setval('ice_cream_id_seq', (SELECT MAX(id) FROM ice_cream))")
    })
}
