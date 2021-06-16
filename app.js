// dependency
const http = require('http');
const { handleReqRes } = require('./helpers/hendleReqRes');
const env = require('./helpers/env');
const data = require('./lib/data');

// app object - model scaffolding
const app = {};

// testing file system
// TO-DO : erase later

data.delete('test', 'newfile', (err) => {
    console.log(err);
});

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
