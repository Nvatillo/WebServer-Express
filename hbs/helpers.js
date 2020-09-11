const { registerHelper } = require("hbs");
const hbs = require('hbs');

// helper 
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});



module.exports = registerHelper