const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const getFirstSpecieId = data.employees
    .find((employee) => employee.id === id)
    .responsibleFor[0];

  const specieListOrderedByAge = data.species
    .find((specie) => specie.id === getFirstSpecieId)
    .residents.sort((a, b) => a.age - b.age);

  return Object.values(specieListOrderedByAge[specieListOrderedByAge.length - 1]);
};

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;
