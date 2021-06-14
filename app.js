// dependency
const http = require('http');
const { handleReqRes } = require('./helpers/hendleReqRes');

// app object - model scaffolding
const app = {};

// configaration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`your server listening to port ${app.config.port}`);
    });
};

// handle requeat response
app.handleReqRes = handleReqRes;

// start server
app.createServer();
