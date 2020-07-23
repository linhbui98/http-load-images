const Express = require('express');
const Http = require('http');
const Https = require('https');
const path = require('path')
const { certificate } = require('./shared');
const config = require('./config')
const PORT = config.port || 3001;
const indexRoute = require('./routes/index');

// HTTP1
const http1app = Express();
http1app.use(function(req, res, next) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');
    next()
});
http1app.use(Express.static('assets'));

http1app.set('views', path.join(__dirname, 'views'));
http1app.set('view engine', 'pug');
http1app.get('/', indexRoute)

// Https.createServer(certificate, http1app).listen(PORT, () => {
//     console.log("App running")
// });

Http.createServer(http1app).listen(PORT, () => {
    console.log("App running")
});

Http.createServer(http1app).listen(process.env.PORT2 || 3002, () => {
    console.log("App running")
});