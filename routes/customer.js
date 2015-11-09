var express = require('express');
var router = express.Router();
var async = require('async');

router.get('/', function(req, res){
    res.render('customer/index');
});

router.post('/complete', function(req, res){
    console.log(req.body);
    if(req.body){
        async.forEach(req.body, function(){

        }, function(){

        });
    }
})

module.exports = router;