var mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // password: '',
    database: 'ecom-database'
});

conn.connect(function(err){
    if (err) throw err;
    console.log("connected");

});

module.exports = conn