const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids) {
    return [];
  }

  const speciesByIds = data.species.filter(({ id }) => ids.includes(id));
  return speciesByIds;
};

module.exports = getSpeciesByIds;
