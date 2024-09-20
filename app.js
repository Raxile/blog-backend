const express = require("express");
const baseRouter = require("./routes/baseRouter");

const app = express();

app.use(express.json());

app.use("/", baseRouter);

module.exports = app;
