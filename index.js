// Declare a var array with 'Sally', 'Bob', 'Freddy', 'Claudia'
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

// Create a function with one argument and return the first two drivers in the array
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
}

// Create a function with one argument and return the last two drivers in the array
const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
}

// Create a var with an array with the two previous functions as the items
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// Create a higher-order function that takes one integer as an argument and returns a function with another integer as the argument then returns the product of both arguments
const createFareMultiplier = (int) => {
  return function(val) {
    return int * val;
  } 
}

// Declare a var, fareDoubler with the createFareMultiplier and invoke it by 2 to double fareTripler when invoked
const fareDoubler = createFareMultiplier(2);

// Declare a var, fareDoubler with the createFareMultiplier and invoke it by 3 to triple fareTripler when invoked
const fareTripler = createFareMultiplier(3);

// Create a function that take two arguments, an array of the drivers and either of the first/last driver functions created above
const selectDifferentDrivers = (drivers, funcs) => {
  return funcs(drivers);
}