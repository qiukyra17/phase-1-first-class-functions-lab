// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    let firstTwoDrivers = [drivers[0],drivers[1]];
    return firstTwoDrivers;}

const returnLastTwoDrivers = function(drivers){
    let lastTwoDrivers = [drivers[drivers.length -2],drivers[drivers.length - 1]];
    return lastTwoDrivers;}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier () {return function fareMultiplier(fare){return fare**2};}

function fareDoubler (fare) {return fare*2};
function fareTripler (fare) {return fare*3};

function selectDifferentDrivers(drivers,selectingDrivers) {return selectingDrivers(drivers)};