const store = require("./store");

function addUser(name) {
  if (!name) {
    return Promise.reject("Invalid Name");
  }
  const user = {
    name,
  };

  return store.add(user);
}

function getUsers(user) {
  return new Promise(async (resolve, reject) => {
    resolve(store.list(user));
  });
}

module.exports = {
  addUser,
  getUsers,
};
