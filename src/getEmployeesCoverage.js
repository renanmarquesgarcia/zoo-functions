const data = require('../data/zoo_data');

const getSpecies = (speciesIds) => {
  const species = data.species
    .filter(({ id }) => speciesIds.includes(id))
    .map(({ name }) => name);
  return species;
};

const getLocation = (speciesIds) => {
  const species = data.species
    .filter(({ id }) => speciesIds.includes(id))
    .map(({ location }) => location);
  return species;
};

const validateEmployee = (employee) => {
  if ('name' in employee) {
    return data.employees.some(({ firstName, lastName }) =>
      employee.name === firstName || employee.name === lastName);
  }
  if ('id' in employee) {
    return data.employees.some(({ id }) => employee.id === id);
  }
};

const getEmployeesCoverage = (employee = {}) => {
  if (Object.keys(employee).length !== 0 && !validateEmployee(employee)) {
    throw new Error('Informações inválidas');
  }

  const employeesInfo = data.employees
    .map(({ id, firstName, lastName, responsibleFor }) => ({
      id,
      fullName: `${firstName} ${lastName}`,
      species: getSpecies(responsibleFor),
      locations: getLocation(responsibleFor),
    }));

  if ('name' in employee) {
    return employeesInfo.find(({ fullName }) => fullName.includes(employee.name));
  }
  if ('id' in employee) return employeesInfo.find(({ id }) => id === employee.id);

  return employeesInfo;
};

module.exports = getEmployeesCoverage;
