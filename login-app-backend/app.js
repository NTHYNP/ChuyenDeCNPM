const express = require("express");
const app = express();
var cors = require('cors')

//Lay du lieu GET
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nguyenhung1210",
  database: "CNPM",
  insecureAuth : true
});

//Dang ky
app.post("/resgister", validationData,(req, res) => {
  const {fullname, name, password, email} = req.body
  
    var sql = 'INSERT INTO user (name, password, email, fullname) VALUES (?, ?, ?, ?)'
    con.query(sql, [name, password, email, fullname], function (err, result) {
      if (err) throw err;
      res.send({status: 200, result: result})
    })
});

app.post("/user", (req, res) => {

  const {name,password} = req.body
  var sql = 'SELECT * FROM user WHERE name = ? AND password = ?'
  con.query(sql, [name, password], function (err, result) {
    if (err) throw err;
    res.send(result)
  });
});

// //Login
// let users = [{ username: "hoctran", password: "123456789" }];
// app.post("/login", (req, res) => {
//   //logic cau request
//   console.log(req.body);
//   if (
//     req.body.username === users[0].username &&
//     req.body.password === users[0].password
//   ) {
//     res.status(200).json({ message: "Dang nhap thanh cong" });
//     return;
//   }
//   res.status(400).json({ message: "Dang nhap that bai" });
// });





//middleware validation
function validationData(req, res, next) {
  const {fullname, name, password, email} = req.body
  if(fullname === ''){
    res.send({status: 300, message: "Họ và tên không được để trống"})
    return
  }
  if(name === ''){
    res.send({status: 300, message: "Tên không được để trống"})
    return  
  }
  if(password === ''){
    res.send({status: 300, message: "Mật khẩu không được để trống"})
    return
    }
  const regex = /^[A-Z0-9._%+-]+@gmail\.com$/i;
  const checkEmail = regex.test(email)
  if(!checkEmail){
    res.send({status: 300, message: "Email không hợp lệ"})
    return
   }
  next();
}

app.listen(3000);