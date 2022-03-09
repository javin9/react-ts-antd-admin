const { createProxyMiddleware } = require("http-proxy-middleware");
const proxyMap = require("./proxy");

module.exports = function (app) {
  Reflect.ownKeys(proxyMap).forEach((key) => {
    const value = proxyMap[key];
    console.log(`${key}---------${value.target}`);
    app.use(createProxyMiddleware(key, value));
  });
};
