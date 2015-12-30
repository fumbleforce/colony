
User.getCollection().
    permit("update").
    ifLoggedIn().
    onlyProps([
        "ignored",
        "friends",
        "updatedAt"
    ]).
    ifIsCurrentUser().
    apply();

Letter.getCollection().permit("remove").ifLoggedIn().ifOwnsDocument().apply();
Letter.getCollection().permit("update").ifLoggedIn().onlyProps(["archived", "updatedAt"]).ifOwnsDocument().apply();