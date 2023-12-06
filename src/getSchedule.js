const data = require('../data/zoo_data');

const getAnimalSchedule = (animal) => {
  const animalAvailability = data.species
    .find(({ name }) => name === animal).availability;
  return animalAvailability;
};

const getAllSchedule = () => {
  const weekDays = Object.keys(data.hours);

  const schedule = weekDays.reduce((acc, curr) => {
    acc[curr] = {
      officeHour: curr === 'Monday'
        ? 'CLOSED'
        : `Open from ${data.hours[curr].open}am until ${data.hours[curr].close}pm`,
      exhibition: curr === 'Monday'
        ? 'The zoo will be closed!'
        : data.species
          .filter(({ availability }) => availability.includes(curr))
          .map(({ name }) => name),
    };

    return acc;
  }, {});

  return schedule;
};

const isDay = (day) => {
  const weekDays = Object.keys(data.hours);
  return weekDays.includes(day);
};

const isAnimal = (animal) => {
  const animals = data.species.map(({ name }) => name);
  return animals.includes(animal);
};

const getSchedule = (scheduleTarget) => {
  if (isAnimal(scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget);
  }
  if (isDay(scheduleTarget)) {
    return { [scheduleTarget]: getAllSchedule()[scheduleTarget] };
  }
  return getAllSchedule();
};

module.exports = getSchedule;
