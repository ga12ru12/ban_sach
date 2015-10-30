/**
 * Created by quang.hoang on 27/10/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccountSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        default: 'abc@123'
    },
    type: {
        type: Number,
        default: 1
    },
    displayName: String
});

mongoose.model('Account', AccountSchema, 'Account');