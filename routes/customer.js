var express = require('express');
var router = express.Router();
var async = require('async');
var TransactionCtrl = require('../controllers/Transaction');
var BookCtrl = require('../controllers/Book');

router.get('/', function(req, res){
    var listBook = [];
    if(req.session.listCart){
        async.forEach(req.session.listCart, function(book, cb){
            var bookCtrl = new BookCtrl();
            bookCtrl.getBookById(book.bookId, function(data){
                if(data){
                    var info = data._doc;
                    info.number = book.number;
                    listBook.push(info);
                    cb();
                }else{
                    cb();
                }
            });
        }, function(){
            res.render('customer/index', {listBook : listBook});
        });
    }else{
        res.render('customer/index', {listBook : []});
    }
});

router.post('/addCart', function(req, res){
    if(req.body.bookId && req.body.number){
        if(!req.session.listCart){
            req.session.listCart = [];
        }
        req.session.listCart.push({
            bookId: req.body.bookId,
            number: req.body.number
        });
        res.send();
    }else{
        res.send().status(400);
    }
});

router.post('/complete', function(req, res){
    console.log(req.body);
    try{
        req.body.listBook = JSON.parse(req.body.listBook);
        var transactionCtrl = new TransactionCtrl();
        req.body.userId = req.session.user._id;
        transactionCtrl.addNew(req.body, function(status){
            if(status){
                res.send();
            }else{
                res.send().status(500);
            }
        });
    }catch(ex){
        console.log(ex);
        res.send().status(423);
    }
})

router.get('/historyTransaction', function(req, res){
    var transactionCtrl = new TransactionCtrl();
    transactionCtrl.getAll(function(data){
        res.render('customer/history', {listTransaction: data});
    });
});
router.post('/getTractionById', function(req, res){
    var transactionCtrl = new TransactionCtrl();
    transactionCtrl.getById(req.body.id, function(data){
        res.send(data);
    });
});

module.exports = router;