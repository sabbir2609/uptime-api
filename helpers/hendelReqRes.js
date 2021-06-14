// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');

// module scafflolding
const handeler = {};

handeler.handelReqRes = (req, res) => {
    // requrst handeling
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+/g, '');
    const method = req.method.toLowerCase();
    const QueryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const decoder = new StringDecoder('utf8');
    let realData = '';
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // response handle
        res.end('Hello World');
    });
};
module.exports = handeler;
