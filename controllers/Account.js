/**
 * Created by quang.hoang on 27/10/2015.
 */
var mongoose = require('mongoose');
var AccountModel = mongoose.model('Account');
var util = require('util');
var EventEmitter = require('events').EventEmitter;

function AccountCtrl(){}
util.inherits(AccountCtrl, EventEmitter);

AccountCtrl.prototype.login = function(username, password, cb){
    AccountModel.findOne({
        username: username,
        password: password
    }, function(err, data){
        if(!err && data){
            return cb(data);
        }else{
            return cb(false)
        }
    });
}

module.exports = AccountCtrl;