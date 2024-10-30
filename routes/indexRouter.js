const { Router } = require("express");
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { message: "Hello world" });
});
indexRouter.get("/new", (req, res) => {
  res.send("new message");
});

module.exports = indexRouter;
