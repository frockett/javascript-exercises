const convertToCelsius = function(input) {
  let celsius = ((input - 32) * 5/9);
  const roundResult = Math.round(celsius * 10) / 10;
  return roundResult;
};

const convertToFahrenheit = function(input) {
  let fResult = ((input * 9/5) + 32)
  const roundResult = Math.round(fResult * 10) / 10;
  return roundResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
