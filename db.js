const db = require("mongoose");
const dbUser = "db_user_telegram";
const password = "n4etCMLKCoc2pVjR";
const dbName = "telegram";
const URL = `mongodb+srv://${dbUser}:${password}@cluster0.vgrmt.mongodb.net/${dbName}?retryWrites=true&w=majority`;

db.Promise = global.Promise;
async function connect(url) {
  try {
    await db.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "telegram",
    });
    console.log("[db] Connect Success");
  } catch (err) {
    console.error(`[db] ${err}`);
  }
}

module.exports = {
  connect,
  URL,
};
