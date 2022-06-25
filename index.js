const express = require("express");
// const home = require("./routes/home.js");

const app = express();

// app.use("/home", home);
app.get("/", function (req, res) {
  res.send("Hello World");
});

// const port = process.env.PORT || 9000;

app.listen(9000, () => console.log(`Successfully run on port 9000`));
