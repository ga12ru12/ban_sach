/**
 * Created by quang.hoang on 3/11/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
    listBook: [{
        bookId: String,
        bookName: String,
        quantity: Number
    }],
    total: Number,
    createdDate: {
        type: Date,
        default: Date.now
    },
    latestUpdate: {
        type: Date,
        default: Date.now
    }
});