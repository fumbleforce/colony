ReactLayout.setRootProps({
  className: ""
});

FlowRouter.route("/", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <Overview />
    });
  }
});

FlowRouter.route("/town", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <Town />
    });
  }
});

FlowRouter.route("/settlers", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <Settlers />
    });
  }
});

FlowRouter.route("/barracks", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <Barracks />
    });
  }
});

FlowRouter.route("/exploration", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <Exploration />
    });
  }
});

FlowRouter.route("/gathering", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <Gathering />
    });
  }
});

FlowRouter.route("/inventory", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <Inventory />
    });
  }
});

FlowRouter.route("/market", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <Market />
    });
  }
});

FlowRouter.route("/treasury", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <Town />
    });
  }
});

FlowRouter.route("/relations", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <Relations />
    });
  }
});


FlowRouter.route("/settings", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <Settings />
    });
  }
});

