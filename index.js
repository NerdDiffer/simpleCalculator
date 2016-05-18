const express = require('express');

const middleware = require('./app/middleware');

var app = express();

middleware.favicon(app);
middleware.log(app);
middleware.less(app);
middleware.staticPath(app);
middleware.notFound(app);
middleware.handleErrors(app);

module.exports = app;
