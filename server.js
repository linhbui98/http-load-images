const Express = require('express');
const Spdy = require('spdy');
const Https = require('http');
const path = require('path')
const { certificate } = require('./shared');
const config = require('./config')
const PORT = config.port || 3001;
const indexRoute = require('./routes/index');

// HTTP1
const http1app = Express();
http1app.use(Express.static('assets'));

http1app.set('views', path.join(__dirname, 'views'));
http1app.set('view engine', 'pug');
http1app.get('/', indexRoute)

Https.createServer(certificate, http1app).listen(PORT, () => {
    console.log("App running")
});