var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('customer/index');
});

module.exports = router;