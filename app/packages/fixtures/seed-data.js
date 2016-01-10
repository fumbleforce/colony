
seed = function () {
  if (User.find({ username: "default" }).count()) return;
  
  createNeighbour("def@asd.asd", "default", "Defaulttown", "Defaultmayor");
  createNeighbour("a@asd.asd", "mantheman", "Mantown", "Mayorman");
  createNeighbour("x@asd.asd", "dude", "Dudetown", "Mayor dude1");
  createNeighbour("b@asd.asd", "dude2", "Mantown2", "Mayorman2");
  createNeighbour("c@asd.asd", "dude3", "Mantown3", "Mayorman3");
  createNeighbour("d@asd.asd", "dude4", "Mantown4", "Mayorman4");
};

function createNeighbour (email, username, settlementName, mayor) {
  let userId = Accounts.createUser({
    email,
    username,
    profile: { tester: true },
    password: "password",
  });
  
  new Settlement({
    name: settlementName,
    mayor: {
      name: mayor
    },
    environment: "mountains",
    userId
  }).save();
}
