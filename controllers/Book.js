/**
 * Created by quang.hoang on 3/11/2015.
 */
var mongoose = require('mongoose');
var BookModel = mongoose.model('Book');

function BookCtrl(){}

BookCtrl.prototype.getAll = function(cb){
    BookModel.find(function(err, data){
        if(err){
            console.log(err);
            return cb([]);
        }else{
            return cb(data);
        }
    });
}

BookCtrl.prototype.addNew = function(params, cb){
    var newBook = new BookModel({
        title: params.title,
        image: params.image,
        teaser: params.teaser,
        content: params.content,
        author: params.author,
        price: params.price
    });
    newBook.save(function(err){
        if(err){
            console.log(err);
            return cb(false);
        }else{
            return cb(true);
        }
    });
}

module.exports = BookCtrl;