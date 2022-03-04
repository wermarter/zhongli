const faker = require('faker')
faker.locale = 'vi'

console.log(
  faker.fake('{{datatype.uuid}} {{name.lastName}} {{name.firstName}}'),
)
