/**
 * Created by quang.hoang on 27/10/2015.
 */
var mongoose = require('mongoose');
var AccountModel = mongoose.model('Account');

console.log('_______________________INIT_______________________');
AccountModel.findOne({type: 0}, function(err, data){
    if(!err && !data){
        var account = new AccountModel({
            username: 'boss',
            password: '12345',
            type: 0,
            displayName: 'This is BOSS'
        });
        account.save(function(err){
            if(err){
                console.log('add This is BOSS');
                console.log(err);
            }
        });
    }else{
        console.log(err);
    }
});
AccountModel.findOne({username: 'demo'}, function(err, data){
    if(!err && !data){
        var account = new AccountModel({
            username: 'demo',
            password: 'demo',
            type: 1,
            displayName: 'This is DEMO'
        });
        account.save(function(err){
            if(err){
                console.log('add This is DEMO');
                console.log(err);
            }
        });
    }else{
        console.log('add This is DEMO');
        console.log(err);
    }
});