const data = require('../data/zoo_data');

const countAnimals = ({ species, sex } = {}) => {
  const animals = data.species.reduce((acc, { name, residents }) => {
    acc[name] = residents;
    return acc;
  }, {});

  let result = animals;
  if (!species || !sex) {
    result = Object.entries(animals).reduce((acc, curr) => {
      acc[curr[0]] = curr[1].length;
      return acc;
    }, {});
  }
  if (species) result = animals[species].length;
  if (sex) result = animals[species].filter((animal) => animal.sex === sex).length;
  return result;
};

module.exports = countAnimals;
