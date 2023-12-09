const data = require('../data/zoo_data');

const getAnimalMap = (options = {}) => {
  const { includeNames, sorted, sex } = options;

  const animalsByLocation = data.species.reduce((acc, { location }) => {
    acc[location] = data.species
      .filter((specie) => specie.location === location)
      .map((specie) => {
        if (!includeNames) return specie.name;
        const residentsNames = specie.residents
          .filter((resident) => (!sex || sex === resident.sex))
          .map((resident) => resident.name);
        if (sorted) residentsNames.sort();
        return { [specie.name]: residentsNames };
      });
    return acc;
  }, {});

  return animalsByLocation;
};

module.exports = getAnimalMap;
