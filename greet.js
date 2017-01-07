let catMe = require('cat-me')

var greet = () => {
  console.log(`Meow! `);
  console.log(`${catMe('playful')}`)
};

module.exports = greet;
