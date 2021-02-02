var mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'digiponic_osac'
});

conn.connect((err) => {
  if (err) throw err;
  console.log('MySQL terkoneksi');
});

module.exports = conn;