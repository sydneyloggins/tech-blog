const Sequilize = require("sequelize");

require("dotenv").config();

//connection to database
const sequilize = process.env.JAWSDB_URL
    ? new Sequilize(process.env.JAWSDB_URL)
    : new Sequilize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: "localhost",
        dialect: "mysql",
        port: 3302
    });

module.exports = sequilize;