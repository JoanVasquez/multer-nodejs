const express = require("express");
const path = require("path");
const errorHandler = require("./errorHandler");

const app = express();

app.set("port", process.env.PORT || 8080);

app.use("/static", express.static(path.join(__dirname, "./public")));

//ROUTINGS
const image = require("./routes/index");
app.use("/api/image", image);

//MIDDLEWARES FOR ERRORS
app.use((req, res, next) => {
  const error = new Error("Route Not Found In the Server!");
  error.status = 404;
  next(error);
});
app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log(`Listening on port: ${app.get("port")}`);
});
