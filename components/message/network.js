const express = require("express");
const response = require("../../network/response");
const router = express.Router();
const controller = require("./controller");

router.get("/", function (req, res) {
  controller
    .getMessage()
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, "unexpected Error", 500, e);
    });
});

router.post("/", function (req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((error) => {
      response.error(
        req,
        res,
        "informacion invalida",
        500,
        "error en el contendio para loguearlo"
      );
    });
});

module.exports = router;
