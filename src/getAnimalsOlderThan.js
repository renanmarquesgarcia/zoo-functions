const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const species = data.species.find(({ name }) => animal === name);
  const isOlderThan = species.residents.every((resident) => resident.age >= age);
  return isOlderThan;
};

module.exports = getAnimalsOlderThan;
