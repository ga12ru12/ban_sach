/**
 * Created by quang.hoang on 3/11/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    teaser: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: 'Nhiều tác giả'
    },
    price: {
        type: Number,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    lastedUpdate: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('Book', BookSchema, 'Book');