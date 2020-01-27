var config = {
    user: 'AdminWeb',
    password: '#CabinW00d5',
    host: '74.208.251.115', 
    database: 'CIS-2-Web' 
};
var sql = require('knex')({
    client:'mssql',
    connection:config
});
module.exports = sql
