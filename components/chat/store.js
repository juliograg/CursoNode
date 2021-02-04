const Model = require("./model");
console.log(Model);

function addChat(chat) {
  console.log(chat);
  const myChat = new Model(chat);
  return myChat.save();
}

function listChats(userId) {
  return new Promise(async (resolve, reject) => {
    let filter = {};
    if (userId) {
      filter = {
        users: userId,
      };
    }
    Model.find(filter)
      .populate("users")
      .exec((err, populated) => {
        if (err) {
          reject(err);
          return false;
        }
        console.log(populated);
        resolve(populated);
      });
  });
}

module.exports = {
  add: addChat,
  list: listChats,
};
