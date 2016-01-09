
U.arrayify = function (obj) {
  return _.map(obj, (value, key) => {
    if (_.isObject(value)) {
      value.key = key;
      return value;
    }
    
    return {
      value,
      key
    };
  });
};
