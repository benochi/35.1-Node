/** Database setup for BizTime. */
const { Client } = require("pg");
//Fix db.js so that it connects to the database and exports the client object.
const client = new Client({
  connectionString: "postgresql:///biztime"
});

client.connect();


module.exports = client;