module.exports = {
    getImages: (req, res) => {
        const host = req.headers.host;
        res.render('index', {
            title: 'HTTP/1.x',
        })
    }
};