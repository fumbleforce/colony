
U.arrayify = function (obj) {
  return _.map(obj, (value, key) => {
    return {
      value,
      key
    };
  });
};
