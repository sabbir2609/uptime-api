// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandelers/notfoundHandler');

// module scafflolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // requrst handeling
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+/g, '');
    const method = req.method.toLowerCase();
    const QueryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        QueryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf8');
    let realData = '';

    const chosenHandeler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    chosenHandeler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // return the final response
        res.writeHead(statusCode);
        res.end(payloadString);
    });

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
module.exports = handler;
