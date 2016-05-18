const express = require('express'),
      favicon = require('serve-favicon'),
      path = require('path'),
      logger = require('morgan'),
      less_middleware = require('less-middleware');

const errorHandler = require('./errorHandler.js');

const pathToPublicDir = path.join(__dirname, '../..', 'pub'),
      development = 'development';

exports.favicon = function(app) {
  var pathToFavicon = pathToPublicDir + '/favicon.ico';
  app.use(favicon(pathToFavicon));
};

exports.log = function(app) {
  app.use(logger('dev'));
};

exports.less = function(app) {
  app.use(less_middleware(pathToPublicDir));
};

exports.staticPath = function(app) {
  app.use(express.static(pathToPublicDir));
};

// catch 404 and forward to error handler
exports.notFound = function(app) {
  app.use(function catch404(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
};

exports.handleErrors = function(app) {
  if (developmentEnv(app)) { app.use(errorHandler.development); }
  else { app.use(errorHandler.production); }
};

function developmentEnv(app) {
  return app.get('env') === development;
}
