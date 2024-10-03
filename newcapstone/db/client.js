const pg = require('pg')
const client = new pg.Client('postgres://localhost/YOURDATABASENAME')

module.exports = client