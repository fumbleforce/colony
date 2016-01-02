
TestUtils = {
  
  count: function (selector) {
    return client.elements(selector).value.length;
  },

  expectCount: function (selector, count) {
    expect(TestUtils.count(selector)).toBe(count);
  },
  
  multiclick: function (selector, count) {
    for (var i = 0; i < count; i++) {
      client.click(selector);
    }
  },
};
