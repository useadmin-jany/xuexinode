let express = require('express');
let app = express();
let bodyParser = require('body-parser');

//使用 body-parser 来解析 POST 请求
app.use(bodyParser.urlencoded({ extended: false }));

//记录地址
app.use(function(req, res, next) {
  const st = `${req.method} ${req.path} - ${req.ip}`;
  console.log(st);
  next();
})

//设置API请求
//向服务器发送数据
app.post('/:word/echo', (req, res) => {

})
//请求数据
app.get('/:word/echo', (req, res) => {
  const xx = req.params.word;
  const fanhui = { echo: xx }
  res.json(fanhui)

})

//从客户端获取输入查询
app.route('/name')
  .get((req, res) => {

    const firstName = req.query.first;
    const lastName = req.query.last;
    const name = firstName + " " + lastName;

    res.json(name);
  })

  .post((req, res) => {
    const firstName = req.body.first;
    const lastName = req.body.last;
    const name = firstName + " " + lastName;
    res.json({ name });

  })





module.exports = app;
