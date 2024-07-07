const mongoose = require("mongoose");
require("colors")

const MONGO_URI = process.env.MONGO;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connected to db".bgCyan.white);
  })
  .catch((err) => {
    console.log(`${err.message}`.bgRed.white);
  });
