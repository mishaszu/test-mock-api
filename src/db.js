const {JsonDB} = require('node-json-db');
const {Config} = require('node-json-db/dist/lib/JsonDBConfig')
const insertData = require('../db/db.json');

const db = new JsonDB(new Config("db", true, true, '/'));

db.push("/", insertData);

module.exports = {
    db
}
