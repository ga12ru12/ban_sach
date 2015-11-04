var express = require('express');
var router = express.Router();
var AccountCtrl = require('../controllers/Account');
var CategoryCtrl = require('../controllers/Category');
var BookCtrl = require('../controllers/Book');
var async = require('async');

/* GET home page. */
router.get('/', function(req, res, next) {
  async.parallel({
    listCategory: function(cb){
      var categoryCtrl = new CategoryCtrl();
      categoryCtrl.getAll(function(data){
        cb(null, data);
      });
    },
    listBook: function(cb){
      var bookCtrl = new BookCtrl();
      bookCtrl.getAll(function(data){
        cb(null, data);
      });
    }
  }, function(err, result){
    res.render('index', {data: result});
  });
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
