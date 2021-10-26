let mongoose = require('mongoose');

//create a model calss
let contactModel = mongoose.Schema({
    contactsName:String,
    contactsNumber:Number,
    EmailAddress:String
},
{
    collection:"contacts"
});
module.exports = mongoose.model('contact', contactModel);
