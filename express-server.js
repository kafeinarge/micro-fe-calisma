var express = require('express');
var httpProxy = require('http-proxy');
var app = express();
var apiProxy = httpProxy.createProxyServer();
var port = 3000;
var staticFilesMaxAge = {
  maxAge: '1y',
};

// apps
var mainApp = 'http://localhost:4200';
var userPanel = 'http://localhost:4201';

// set static files
app.use(
  express.static(
    `${process.cwd()}/dist/apps/micro-frontend/browser`,
    staticFilesMaxAge
  )
);
app.use(
  express.static(
    `${process.cwd()}/dist/apps/user-panel/browser`,
    staticFilesMaxAge
  )
);

// routings
app.all('/', function (req, res) {
  apiProxy.web(req, res, { target: mainApp }, function (e) {
    proxyErrorHandling(e, res, '/');
  });
});

app.all('/homepage', function (req, res) {
  apiProxy.web(req, res, { target: mainApp }, function (e) {
    proxyErrorHandling(e, res, '/homepage');
  });
});

app.all('/user-panel', function (req, res) {
  apiProxy.web(req, res, { target: userPanel }, function (e) {
    proxyErrorHandling(e, res, '/user-panel');
  });
});

// error handling
function proxyErrorHandling(e, res, route) {
  return res.status(500).send({
    error: true,
    message: `${e.message}, ${route} route is down`,
  });
}

// listen
app.listen(port, () => {
  console.log(`Node Express server listening on http://localhost:${port}`);
});
