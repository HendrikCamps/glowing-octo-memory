module.exports = (app) => {
  const App = require("../controllers/app.controller");

  app.post("/todos", App.create);

  app.get("/todos", App.findAll);

  app.get("/todos/:id", App.findOne);

  app.put("/todos/:id", App.update);

  app.delete("/todos/:id", App.delete);
};