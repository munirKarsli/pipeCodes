module.exports = app => {
  const mongo = require("../controllers/controller.js");

  var router = require("express").Router();

  router.post("/", mongo.create);

  router.get("/", mongo.findAll);

  router.get("/:id", mongo.findOne);

  router.put("/:id", mongo.update);

  router.delete("/:id", mongo.delete);

  router.delete("/", mongo.deleteAll);

  app.use("/api", router);
};
