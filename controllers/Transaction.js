var mongoose = require('mongoose');
var Transaction = mongoose.model('Transaction');

function TransactionCtrl(){}

TransactionCtrl.prototype.addNew = function(params, cb){
    var transaction = new Transaction(params);
    transaction.save(function(err){
        if(err){
            console.log(err);
            return cb(false);
        }else{
            return cb(true);
        }
    });
}

TransactionCtrl.prototype.getAll = function(cb){
    Transaction.find(function(err, data){
        if(err){
            console.log(err);
        }
        return cb(data);
    });
}

TransactionCtrl.prototype.getById = function(id, cb){
    Transaction.findById(id, function(err, data){
        if(err) console.log(err);
        return cb(data);
    });
}

module.exports = TransactionCtrl;