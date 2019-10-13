const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api/*', { target: 'https://172.21.48.123:8000',
    ws: true,
    secure: false,
    changeOrigin: true  }));
};