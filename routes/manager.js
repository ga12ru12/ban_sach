var express = require('express');
var router = express.Router();
var CategoryCtrl = require('../controllers/Category');
var BookCtrl = require('../controllers/Book');
var moment = require('moment');
var async = require('async');

router.get('/', function(req, res){
    var categoryCtrl = new CategoryCtrl();
    categoryCtrl.getAll(function(data){
        res.render('manager/index', {
            listCategory: data,
            moment: moment,
            type: 1
        });
    });
});
router.get('/listCategory', function(req, res){
    res.redirect('/manager/');
})
router.post('/addNewCategory', function(req, res){
    console.log(req.body);
    var categoryCtrl = new CategoryCtrl();
    categoryCtrl.addNew(req.body, function(status){
        res.send(status);
    });
});
router.get('/listBook', function(req, res){
    console.log(req.body);
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
        res.render('manager/listBook', {
            data: result,
            type: 2
        });
    });
});
router.post('/addNewBook', function(req, res){
    console.log(req.body);
    var bookCtrl = new BookCtrl();
    bookCtrl.addNew(req.body, function(status){
        res.send(status);
    });
});
router.get('/transaction', function(req, res){


});

module.exports = router;