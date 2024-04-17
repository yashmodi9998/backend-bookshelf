const express = require("express");
const path = require("path");
const router = require("./modules/router");
const cors = require("cors"); 
const app = express();
const port = process.env.PORT || "8888";
app.use(cors());
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
app.use("/", router);
