const express = require("express");
const response = require("../../network/response");
const router = express.Router();
const controller = require("./controller");

router.get("/", function (req, res) {
  const filterMessages = req.query.user || null;
  controller
    .getMessage(filterMessages)
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

router.patch("/:id", function (req, res) {
  console.log(req.params.id);
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => response.success(req, res, data, 200))
    .catch((e) => response.error(req, res, "Error Interno", 500, e));
});

router.delete("/:id", function (req, res) {
  controller
    .deleteMessage(req.params.id)
    .then(() =>
      response.success(req, res, `mensaje ${req.params.id} eliminado`, 200)
    )
    .catch((e) => response.error(req, res, "error interno", 500, e));
});

module.exports = router;
