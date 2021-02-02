const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
console.log(db);
db.connect(db.URL);

const router = require("./network/routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
router(app);
// router(app);

app.use("/App", express.static("public"));

app.listen(3000, () => {
  console.log("la aplicacion esta escuchando en http://localhost:3000");
});
