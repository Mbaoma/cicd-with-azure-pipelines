//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist"));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

const port = process.env.PORT || 9091;

/* eslint-disable no-console */
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
