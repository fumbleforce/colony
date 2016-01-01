
User.getCollection().
  permit("update").
  ifLoggedIn().
  onlyProps([
      "updatedAt",
      "ignored",
      "friends",
  ]).
  ifIsCurrentUser().
  apply();

Town.getCollection()
  .permit("update")
  .ifLoggedIn()
  .onlyProps([
      "updatedAt",
      "budget",
  ])
  .apply();



Letter.getCollection().permit("remove").ifLoggedIn().ifOwnsDocument().apply();
Letter.getCollection().permit("update").ifLoggedIn().onlyProps(["archived", "updatedAt"]).ifOwnsDocument().apply();

// XX TODO TODO REMOVE FOR TESTING ONLY
Process.getCollection().permit("insert").apply();