const Model = require("./model");

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

async function getUsers(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { name: filterUser };
  }
  console.log(filter);
  const users = await Model.find(filter);
  return users;
}
module.exports = {
  add: addUser,
  list: getUsers,
  // updateText,
  // remove: removeMessage,
};
