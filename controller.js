'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res) {
  response.ok(null, "Aplikasi REST API berjalan", res);
};

exports.login = function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var query = "SELECT cms_users.*, tb_cabang.nama_cabang FROM cms_users INNER JOIN tb_cabang ON cms_users.id_cabang = tb_cabang.id WHERE cms_users.email = '?'";
  connection.query(query, [username], function(error, rows, fields){
    if (error) {
      console.log(error)
    } else {
      console.log(rows)
    }
  })
}

// // Menampilkan data semua mahasiswa
// exports.tampilsemuamahasiswa = function (req, res) {
//   connection.query("SELECT * FROM mahasiswa", function(error, rows, fields) {
//     if (error) {
//       console.log(error);
//     } else {
//       response.ok(rows, res);
//     }
//   });
// };

// // Menampilkan semua data mahasiswa berdasarkan id
// exports.tampilbasedonid = function (req, res) {
//   let id = req.params.id;
//   connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id], function(error, rows, fields) {
//     if (error) {
//       console.log(error);
//     } else {
//       response.ok(rows, res);
//     }
//   });
// };

// // Menambahkan data mahasiswa
// exports.tambahmahasiswa = function (req, res) {
//   var nim = req.body.nim;
//   var nama = req.body.nama;
//   var jurusan = req.body.jurusan;

//   connection.query("INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?, ?, ?)", [nim, nama, jurusan], function (error, rows, fields) {
//     if (error) {
//       console.log(error);
//     } else {
//       response.ok("Berhasil menambahkan data!", res);
//     }
//   });
// };

// // Mengubah data berdasarkan id
// exports.ubahmahasiswa = function (req, res){
//   var id = req.body.id_mahasiswa;
//   var nim = req.body.nim;
//   var nama = req.body.nama;
//   var jurusan = req.body.jurusan;

//   connection.query("UPDATE mahasiswa SET nim = ?, nama = ?, jurusan = ? WHERE id_mahasiswa = ?", [nim, nama, jurusan, id], function (error, rows, fields) {
//     if (error) {
//       console.log(error);
//     } else {
//       response.ok("Berhasil mengubah data!", res);
//     }
//   });
// };

// // Menghapus data mahasiswa berdasarkan id
// exports.hapusmahasiswa = function (req, res){
//   var id = req.body.id_mahasiswa;

//   connection.query("DELETE FROM mahasiswa WHERE id_mahasiswa = ?", [id], function (error, rows, fields) {
//     if (error) {
//       console.log(error);
//     } else {
//       response.ok("Berhasil menghapus data!", res);
//     }
//   });
// };

// // Menampilkan group matakuliah yang diambil mahasiswa
// exports.tampilgroupmk = function (req, res) {
//   connection.query("SELECT mhs.id_mahasiswa, mhs.nim, mhs.nama, mhs.jurusan, mk.matakuliah, mk.sks FROM mahasiswa AS mhs INNER JOIN krs ON krs.id_mahasiswa = mhs.id_mahasiswa INNER JOIN matakuliah AS mk ON krs.id_matakuliah = mk.id_matakuliah", function(error, rows, fields) {
//     if (error) {
//       console.log(error);
//     } else {
//       response.oknested(rows, res);
//     }
//   });
// };