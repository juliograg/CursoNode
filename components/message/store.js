const db = require("mongoose");
const Model = require("./model");

const dbUser = "db_user_telegram";
const password = "n4etCMLKCoc2pVjR";
const dbName = "telegram";
const URL = `mongodb+srv://${dbUser}:${password}@cluster0.vgrmt.mongodb.net/${dbName}?retryWrites=true&w=majority`;

db.Promise = global.Promise;
db.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "telegram",
})
  .then(() => console.log("[db] Connect Success"))
  .catch((err) => console.log(`[db] ${err}`));

function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage() {
  // console.log(list);
  const messages = await Model.find();
  return messages;
}

module.exports = {
  add: addMessage,
  list: getMessage,
  //get
  //delete
};
