const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    useremail:{ type: String, required: true},
    isadmin: {type: Boolean, required: false},
    firstname: {type: String, required: false},
    lastname: {type: String, required: false}
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;