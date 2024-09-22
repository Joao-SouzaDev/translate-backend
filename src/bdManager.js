const pg = require('pg')
function tryFetchConnection(){
    const client = new pg.Client({
        user: "postgres",
        password:"root",
        host:"localhost",
        port:"5432",
        database:"postgres"
    });
    client.connect()
    return 1
}


module.exports = {
    tryFetchConnection
}