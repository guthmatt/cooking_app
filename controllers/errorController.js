"use strict";

const httpStatus  = require("http-status-codes");

exports.pagenotFoundError = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
};

exports.internalServerError = (error, reg, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occured: ${error.stack}`)
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our app is taking a nap!`);
};