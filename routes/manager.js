var express = require('express');
var router = express.Router();
var CategoryCtrl = require('../controllers/Category');

router.get('/', function(req, res){
    var categoryCtrl = new CategoryCtrl();
    categoryCtrl.getAll(function(data){
        res.render('manager/index', {listCategory: data});
    });
});
router.post('/addNewCategory', function(req, res){
    console.log(req.body);
    var categoryCtrl = new CategoryCtrl();
    categoryCtrl.addNew(req.body, function(status){
        res.send(status);
    });
});

module.exports = router;