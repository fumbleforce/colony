
Utility.money = function (n) {
  if (isNaN(n)) {
    return "NaN";
  }
  return numeral(n).format('($0,0)');
}

Utility.number = function (n) {
  if (isNaN(n)) {
    return "NaN";
  }
  return numeral(n).format('(0,0)');
}