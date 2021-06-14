/*
    Title: 404 handelers
*/

// modeule scaffolding

const handler = {};

// function
handler.notFoundHandler = (requestsProperties, callback) => {
    callback(404, {
        massage: 'Your requested url was not fond',
    });
};

module.exports = handler;
