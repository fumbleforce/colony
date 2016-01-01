module.exports = function () {
  this.When(/^click the assign button for militia$/, function () {
    client.waitForExist("#assign-plot-militia");
    client.click("#assign-plot-militia");
  });
  
  this.Then(/^a plot is assigned to militia$/, function () {
    client.waitForExist(".militia-plot");
    expect(client.isExisting(".militia-plot")).toBe(true);
  });
  
  this.Then(/^a plot is not assigned to militia$/, function () {
    client.waitForExist(".militia-plot");
    expect(client.isExisting(".militia-plot")).toBe(true);
  });

  this.Then(/^a plot is not assigned to militia$/, function () {
    client.waitForExist(".militia-plot");
    expect(client.isExisting(".militia-plot")).toBe(true);
  });
  
  this.When(/^click the assign button for militia max times$/, function () {
    client.waitForExist("#assign-plot-militia");
    
    var count = server.execute(function () {
      return Gamedata.plots.startCount;
    });
    
    TestUtils.multiclick("#assign-plot-militia", count);
  });

  this.When(/^click the assign button for militia max times and another$/, function () {
    client.waitForExist("#assign-plot-militia");
    
    var count = server.execute(function () {
      return Gamedata.plots.startCount;
    });
    
    TestUtils.multiclick("#assign-plot-militia", count + 1);
  });

  this.Then(/^max plots are added$/, function () {
    var count = server.execute(function () {
      return Gamedata.plots.startCount;
    });
    
    expect(TestUtils.count(".militia-plot")).toBe(count);
  });
  
  this.When(/^click the deassign button for militia$/, function () {
    client.waitForExist("#deassign-plot-militia");
    client.click("#deassign-plot-militia");
  });

  this.Then(/^a plot is deassigned from militia$/, function () {
  });

  this.When(/^click the deassign button for militia when no plots are assigned$/, function () {
    client.waitForExist("#deassign-plot-militia");
    client.click("#deassign-plot-militia");
  });

  this.Then(/^the plot count is still zero$/, function () {
    expect(TestUtils.count(".militia-plot")).toBe(0);
  });

};
