const config = require("../config/config")
const schema = require("./schema.js")
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = config.getMongoHost();
db.schema = schema(mongoose);

module.exports = db;
