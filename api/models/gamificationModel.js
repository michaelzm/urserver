'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GamificationSchema = new Schema({

    user_lastName: {
        type: String,
    },
    user_counter: {
        type: Number
    },
    userLevel: {
        type: Number,
    },
    userRanking:{
        type: Number
    },
    partA1: {
        type: Number,
    },
    partA2: {
        type: Number,
    },
    partB1: {
        type: Number,
    },
    partB2: {
        type: Number,
    },
    partB3: {
        type: Number,
    },
    partB4: {
        type: Number,
    },
    partB5: {
        type: Number,
    },
    partB: {
        type: Number,
    },    
    Created_date: {
        type: Date,
        default: Date.now
    }   
});

module.exports = mongoose.model('Gamification', GamificationSchema);