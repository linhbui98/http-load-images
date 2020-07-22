const Express = require('express');
const Spdy = require('spdy');
const Https = require('https');
const path = require('path')
const { certificate } = require('./shared');
const config = require('./config')
const PORT = config.port || 3001;
const indexRoute = require('./routes/index');

// HTTP1
const http1app = Express();
http1app.use(Express.static('assets'));

// HTTP2
const http2app = Express();

http1app.set('views', path.join(__dirname, 'views'));
http1app.set('view engine', 'pug');
http1app.get('/', indexRoute)

Https.createServer(certificate, http1app).listen(PORT, () => {
    Spdy.createServer(certificate, http2app).listen(process.env.PORT2 || 3000)
    console.log("App running")
});