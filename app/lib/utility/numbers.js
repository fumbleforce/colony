
U.money = function (n) {
  if (isNaN(n)) {
    return "NaN";
  }
  return numeral(n).format('($0,0)');
};

U.number = function (n) {
  if (isNaN(n)) {
    return "NaN";
  }
  return numeral(n).format('(0,0)');
};

U.clamp = function (val, min, max) {
  return Math.max(Math.min(val, max), min);
};

U.sum = (a, b) => { return a + b; };
U.sumList = (l) => { return _.reduce(l, U.sum, 0); };
U.valueList = (o) => { return _.map(o, (v) => v); };
U.sumObj = (o) => { return _.reduce(U.valueList(o), U.sum, 0); };
