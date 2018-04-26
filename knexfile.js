module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/ice_cream'
  },
  test: {},
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
