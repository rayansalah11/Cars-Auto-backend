const express = require("express");
const app = express();


// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "backend/config/.env",
    });
  }


//ErrorHandling abe la kotaiabe
app.use(ErrorHandler);

  module.exports = app;