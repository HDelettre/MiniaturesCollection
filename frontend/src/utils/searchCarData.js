import carsCollection from "../dataBank/carsBdd";

export const dataOfCar = (carModel, season) => {
  const carBySeason = carsCollection[parseInt(season) - 1950].cars;
  let carData = {};

  for (let i = 0; i < carBySeason.length; i++) {
    if (carBySeason[i].model === carModel) {
      carData = carBySeason[i];
      break;
    }
  }

  return carData;
};
