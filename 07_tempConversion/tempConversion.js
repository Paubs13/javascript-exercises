const convertToCelsius = function(temp) {
  const celsTemp = (temp - 32) * (5/9);
  let roundedTemp = Math.round(celsTemp * 10) / 10
  return roundedTemp;
};

const convertToFahrenheit = function(temp) {
  const fahrTemp = ((temp * (9/5)) + 32);
  let roundedTemp = Math.round(fahrTemp * 10) / 10
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
