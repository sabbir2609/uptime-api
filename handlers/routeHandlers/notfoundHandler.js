/*
    Title: 404 handelers
*/

// modeule scaffolding

const handler = {};

// function
handler.notFoundHandler = (requestProperties, callback) => {
    console.log(`req path ${requestProperties.path}`);
    callback(404, {
        massage: 'Your requested url was not fond',
    });
};

module.exports = handler;
