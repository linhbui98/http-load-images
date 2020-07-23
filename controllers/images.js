module.exports = {
    getImages: (req, res) => {
        const host = req.headers.host;
        const protocol = req.protocol;
        res.render('index', {
            title: 'HTTP/1.x',
            host: host,
            protocol: protocol
        })
    }
};