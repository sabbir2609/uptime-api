// dependency

const http = require('http');
const { handelReqRes } = require('./helpers/hendelReqRes');

// app object - model scaffolding
const app = {};

// configaration

app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handelReqRes);
    server.listen(app.config.port, () => {
        console.log(`Your server is running on port ${app.config.port}`);
    });
};

// handle requeat response
app.handelReqRes = handelReqRes;

// start server
app.createServer();
