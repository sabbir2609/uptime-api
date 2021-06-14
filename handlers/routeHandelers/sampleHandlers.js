/*
    Title: sample handelers
*/

// modeule scaffolding

const handler = {};

// function
handler.sampleHandler = (requestProperties, callback) => {
    console.log(requsestProperties);
    callback(200, {
        massage: 'This is a sample url',
    });
};

module.exports = handler;
