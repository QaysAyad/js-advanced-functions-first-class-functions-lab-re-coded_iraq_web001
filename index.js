// Code your solution in this file!
const  returnFirstTwoDrivers=(drivers)=>{
  return [drivers[0],drivers[1]];
}

const  returnLastTwoDrivers=(drivers)=>{
  return [drivers[drivers.length-2],drivers[drivers.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(int){
  return function(fare){
    return int*fare;
  }
}

const fareDoubler =()=>{
  return createFareMultiplier(2);
}