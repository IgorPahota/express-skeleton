module.exports = function(app) {
    const express = require("express");
    const morgan = require("morgan");
    const path = require("path");
    const dbConnection = require("./db-connect");

    app.use(morgan("dev"));

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use(express.static(path.join(__dirname, '..', "public")));

    app.set("views", path.join(__dirname, '..', "views"));
    app.set("view engine", "hbs");

};
