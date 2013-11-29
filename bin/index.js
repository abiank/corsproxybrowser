#!/usr/bin/env node
var corsproxy = require("../lib/corsproxy");
var httpProxy = require("http-proxy");

var host = process.env.HOST || process.argv[2] || "0.0.0.0";
var port = process.env.PORT || process.argv[3] || 9000;

httpProxy.createServer(corsproxy).listen(port, host, function() {
  console.log("CORS Proxy started on %s:%d", host, port);
});
