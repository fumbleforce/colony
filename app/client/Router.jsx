ReactLayout.setRootProps({
  className: ""
});

FlowRouter.route("/", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <OverviewPage />
    });
  }
});

FlowRouter.route("/settlement", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <SettlementPage />
    });
  }
});

FlowRouter.route("/settlers", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <SettlersPage />
    });
  }
});

FlowRouter.route("/barracks", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <BarracksPage />
    });
  }
});

FlowRouter.route("/exploration", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <ExplorationPage />
    });
  }
});

FlowRouter.route("/gathering", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <GatheringPage />
    });
  }
});

FlowRouter.route("/crafting", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <CraftingPage />
    });
  }
});

FlowRouter.route("/map", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <MapPage />
    });
  }
});

FlowRouter.route("/labratory", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <LabratoryPage />
    });
  }
});

FlowRouter.route("/inventory", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <InventoryPage />
    });
  }
});

FlowRouter.route("/market", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <MarketPage />
    });
  }
});

FlowRouter.route("/treasury", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <TreasuryPage />
    });
  }
});

FlowRouter.route("/relations", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <RelationsPage />
    });
  }
});

FlowRouter.route("/newsboard", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <NewsboardPage />
    });
  }
});

FlowRouter.route("/settings", {
  action () {
    ReactLayout.render(MainLayout, {
      content: <SettingsPage />
    });
  }
});

