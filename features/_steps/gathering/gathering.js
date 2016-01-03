module.exports = function () {
  
  this.Given(/^have assigned a grain plot$/, function () {
    client.url("/gathering");
    client.waitForExist("#assign-plot-grain");
    client.click("#assign-plot-grain");
  });

  this.When(/^I wait for the next resource tick$/, function () {
    client.pause(1000);
  });

  this.Then(/^I receive grain$/, function () {
    var grainCount = +client.getText("#resource-indicator-grain");
    expect(grainCount).toBeGreaterThan(50);
  });

  this.Given(/^have assigned (\d+) plots to gathering$/, function (plotCount) {
    client.url("/gathering");
    client.waitForExist("#assign-plot-grain");
    TestUtils.multiclick("#assign-plot-grain", plotCount);
  });

  this.When(/^I look at the plot overview$/, function () {
  });

  this.Then(/^I see that I have three available plots$/, function () {
    client.waitForExist("#free-plots");
    var grainPlots = +client.getText("#free-plots");
    expect(grainPlots).toEqual(3);
  });
  
  this.When(/^I assign a plot to farming$/, function () {
    client.url("/gathering");
    client.waitForExist("#assign-plot-grain");
    TestUtils.multiclick("#assign-plot-grain", 1);
  });

  this.Then(/^a plot is added to farming$/, function () {
    client.waitForExist(".farming-plot");
    TestUtils.expectCount(".farming-plot", 1);
  });

  this.Given(/^I have assigned a grain plot$/, function () {
    
  });

};
