/**
 * Created by quang.hoang on 2/11/2015.
 */
var mongoose = require('mongoose');
var CategoryModel = mongoose.model('Category');

function CategoryCtrl(){}

CategoryCtrl.prototype.getAll = function(cb){
    CategoryModel.find(function(err, data){
        if(!err){
            return cb(data);
        }else{
            return cb([]);
        }
    });
}
CategoryCtrl.prototype.addNew = function(data, cb){
    var categoryModel = new CategoryModel({
        name: data.name,
        description: data.description
    });
    categoryModel.save(function(err){
        if(err) console.log(err);
        return cb(err ? false : true);
    });
}

module.exports = CategoryCtrl;