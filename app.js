// dependency
const http = require('http');
const { handleReqRes } = require('./helpers/hendleReqRes');
const env = require('./helpers/env');

// app object - model scaffolding
const app = {};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(env.port, () => {
        console.log(`your server listening to port ${env.port}`);
    });
};

// handle requeat response
app.handleReqRes = handleReqRes;

// start server
app.createServer();
