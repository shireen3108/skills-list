const express = require("express");
// eslint-disable-next-line no-unused-vars
const path = require("path");
const serveStatic = require("serve-static");

let app = express();
app.use(serveStatic(__dirname + "/dist"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Listening on port " + port);
});