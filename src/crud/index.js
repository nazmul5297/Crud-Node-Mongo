const basicOperationRouter = require("./basicOperationRouter");

function init(app) {
  app.use("/basicOperation", basicOperationRouter);
}

module.exports = {
  init,
};
