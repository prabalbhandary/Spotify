const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const PORT = 5000;
require("./db");
require("colors")
const morgan = require("morgan")

app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

app.use("/api/user", require("./routes/user"));
app.use("/api/playlist", require("./routes/playlist"));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`.bgMagenta.white);
});
