const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'streaming'
});

mysqlConnection.connect(function (error) {
  if(error) {
    console.log(error);
    return;
  } else {
    console.log('connection to DB succesfully');
  }
});

module.exports = mysqlConnection;