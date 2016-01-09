U.weightedRandom = function (items) {
  const results = _.map(items, (i) => i[0]);
  const weights = _.map(items, (i) => i[1]);
  
  var ar = [];
  var i,sum = 0;

  // that following initialization loop could be done only once above that
  // randexec() function, we let it here for clarity

  for (i=0 ; i<weights.length-1 ; i++) // notice the '-1'
  {
    sum += (weights[i] / 100.0);
    ar[i] = sum;
  }


  // Then we get a random number and finds where it sits inside the probabilities 
  // defined earlier

  var r = Math.random(); // returns [0,1]

  for (i=0 ; i<ar.length && r>=ar[i] ; i++) ;

  // Finally execute the function and return its result

  return results[i];
}