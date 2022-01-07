const DB_URL = process.env.DB_URL || "mongodb://localhost:27017/codePipes";
const PORT = process.env.PORT || 8080;

const getConfig = function () {
    return {
        mongo_db_url : DB_URL,
        server_port : PORT
    };
};


const getMongoHost = function () {
    return getConfig().mongo_db_url;
}

const getServerPort = function () {
    return getConfig().server_port;
}

module.exports.getServerPort = getServerPort;
module.exports.getMongoHost = getMongoHost;