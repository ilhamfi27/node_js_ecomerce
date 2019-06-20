// use mysql dbms
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',   
    database: 'node_mysql_learn'
})

// connect to mysql
conn.connect((err) => {
    if (err) throw err;
    console.log("Connected to database as " + conn.threadId);
});

exports.conn = conn;