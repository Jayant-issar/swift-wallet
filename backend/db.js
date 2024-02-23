// this file deals with all the data base realted stuff

const express = require('express');
const mongoose = require('mongoose'); //adding mongoose library in the file
const { object } = require('zod');


//connecting to a data base
mongoose.connect("mongodb+srv://jayantissar8:jayant2323@cluster0.8rovxij.mongodb.net/paytm-db")

//mongose schema for user tabels
const userDbSchema = new mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    password: String
})

//creating the model from the schema created (userDbSchema)
const User = mongoose.model("User",userDbSchema)

//mongose sechema for accounts
const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = {
    User,
    Account
}
