const store = require("./store");
console.log(store.add);

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageController] No Hay usuario o mensaje");
      return reject("Los datos son incorrectos");
    }

    const fullMessage = {
      user,
      message,
      date: new Date(),
    };
    console.log(fullMessage);
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessage() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}
module.exports = {
  addMessage,
  getMessage,
};
