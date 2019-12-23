const express = require("express");
const indexRouter = require("./routes/index");
const useMiddleware = require("./middleware");
const app = express();
useMiddleware(app);

app.use("/", indexRouter);


module.exports = app;
