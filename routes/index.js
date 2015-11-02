var express = require('express');
var router = express.Router();
var AccountCtrl = require('../controllers/Account');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/login', function(req, res){
  var accountCtrl = new AccountCtrl();
  accountCtrl.login(req.body.username, req.body.password, function(data){
    if(data){
      req.session.user = data;
      req.session.success = 'Đăng nhập thành công';
    }else{
      req.session.err = "Sai tên đăng nhập hoặc mật khẩu. Hãy thử lại!!!!";
    }
    res.redirect('/');
  });
});
router.get('/logout', function(req, res){
  req.session.user = null;
  res.redirect('/');
});

module.exports = router;
