/**
 * Created by quang.hoang on 2/11/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    createDate: {
        "type": Date,
        "default": Date.now
    },
    lastedUpdate: {
        "type": Date,
        "default": Date.now
    }
});

mongoose.model('Category', CategorySchema, 'Category');