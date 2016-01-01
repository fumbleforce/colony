
TestUtils = {
  
  count: function (selector) {
    return client.elements(selector).value.length;
  },
  
  multiclick: function (selector, count) {
    for (var i = 0; i < count; i++) {
      client.click(selector);
    }
  },
};
