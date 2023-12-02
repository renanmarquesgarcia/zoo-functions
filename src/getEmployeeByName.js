const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};

  const employeeInfo = data.employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
  return employeeInfo;
};

module.exports = getEmployeeByName;
