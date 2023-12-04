const data = require('../data/zoo_data');

const isManager = (id) => {
  const manager = data.employees.some(({ managers }) => managers.includes(id));
  return manager;
};

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const managedPeople = data.employees
    .filter(({ managers }) => managers.includes(managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);

  return managedPeople;
};

module.exports = { isManager, getRelatedEmployees };
