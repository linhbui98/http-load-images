const config = require('../config')
const PORT_HTTP1 = config.portHttp1 || 3001;
const { getFile } = require('../shared');

module.exports = {
    getImages: (req, res) => {
        const host = req.headers.host;
        res.render('index', {
            title: 'HTTP/1.x',
            host: host,
            PORT_HTTP1: PORT_HTTP1,
        })
    }
};