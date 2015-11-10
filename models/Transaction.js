/**
 * Created by quang.hoang on 3/11/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
    listBook: [{
        bookId: String,
        bookName: String,
        number: Number
    }],
    userId: {
        type: String,
        ref: 'Account'
    },
    total: Number,
    name: String,
    address: String,
    phone: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    latestUpdate: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Transaction', TransactionSchema, 'Transaction');