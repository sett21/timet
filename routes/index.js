//routes/index.js
module.exports = function (app) {
    require("./home")(app);
    require("./auth")(app);
};