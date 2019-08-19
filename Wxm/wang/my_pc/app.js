//使用express构建web服务器 --11:25
const express = require('express');
const bodyParser = require('body-parser');
const pool = require("./pool");
/*引入路由模块*/
// const index=require("./routes/index");
// const details=require("./routes/details")
const cors = require("cors");
var app = express();
var server = app.listen(8080);
app.use(cors({
    origin: "http://127.0.0.1:5500"
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
/*使用路由器来管理路由*/
// app.use("/index",index);
// app.use("/details",details);
// 登录
app.post("/login", (req, res) => {
        var uname = req.body.uname;
        var upwd = req.body.upwd;
        if (!uname) {
            res.send({ code: -1, msg: "用户名不能为空" });
            return;
        }
        if (!upwd) {
            res.send({ code: -2, msg: "密码不能为空" });
            return;
        }
        var sql = "SELECT id FROM p_login WHERE uname=? AND upwd=?";
        pool.query(sql, [uname, upwd], (err, result) => {
            if (err) throw err;
            if (result.length > 0) {
                res.send({ code: 1, msg: "登录成功" })
            } else {
                res.send({ code: -3, msg: "用户名或者密码错误" })
            }
        })
    })
    //商品列表1
app.get("/product1", (req, res) => {
        // var uid=req.query.uid;
        // console.log(uid);
        var sql = `SELECT * FROM product_list`;
        pool.query(sql, (err, result) => {
            if (err) {
                console.log(err);
                res.send({ code: 0 });
            } else {
                res.send(result);
            }
        })
    })
    //商品列表2
app.get("/product2", (req, res) => {
        var uid = req.query.uid;
        console.log(uid);
        var sql = `SELECT * FROM product_list2  WHERE uid=?`;
        pool.query(sql, [uid], (err, result) => {
            if (err) {
                console.log(err);
                res.send({ code: 0 });
            } else {
                res.send(result);
            }
        })
    })
//ames
app.get("/ames", (req, res) => {
        var uid = req.query.uid;
        console.log(uid);
        var sql = `SELECT * FROM product_list2 WHERE uid=?`;
        pool.query(sql, [uid], (err, result) => {
            if (err) {
                console.log(err);
                res.send({ code: 0 });
            } else {
                res.send(result);
            }
        })
    })
 //deatils
app.get("/details", (req, res) => {
    var lid = req.query.lid;
    console.log(lid);
    var sql = ` SELECT * FROM product_details WHERE lid=?`;
    pool.query(sql, [lid], (err, result) => {
        if (err) {
            console.log(err);
            res.send({ code: 0 });
        } else {
            res.send(result);
            console.log(result);
        }
    })
})