function barbellPlateCalculator(targetWeight, barWeight){
  var weightToAdd = targetWeight - barWeight;
  var fortyFives = Math.floor(weightToAdd/(2*45));
    console.log(`45s: `+ fortyFives)
  var twentyFives = Math.floor((weightToAdd - (fortyFives * 45 * 2)) / (2*25));
    console.log(`25s: `+ twentyFives)
  var tens = Math.floor((weightToAdd - ((fortyFives * 45 * 2)) - ((twentyFives * 25 * 2))) / (2*10));
    console.log(`10s: `+ tens)
  var fives = Math.floor((weightToAdd - ((fortyFives * 45 * 2)) - ((twentyFives * 25 * 2)) - ((tens * 10 * 2)))/ (2*5));
    console.log(`5s: `+ fives)
  var twoAndHalf = Math.floor((weightToAdd - ((fortyFives * 45 * 2)) - ((twentyFives * 25 * 2)) - ((tens * 10 * 2)) - ((fives * 5 * 2))) / (2*2.5)); 
    console.log(`2.5s: `+ twoAndHalf)
}


// Tests
barbellPlateCalculator(235, 45);