const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const entrantsByAge = entrants.reduce((acc, { age }) => {
    if (age < 18) acc.child += 1;
    else if (age < 50) acc.adult += 1;
    else acc.senior += 1;

    return acc;
  }, { child: 0, adult: 0, senior: 0 });

  return entrantsByAge;
};

const calculateEntry = (entrants) => {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  const { prices } = data;

  const totalRevenue = (child * prices.child) + (adult * prices.adult) + (senior * prices.senior);
  return Number(totalRevenue.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
