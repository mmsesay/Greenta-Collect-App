const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = mongoose.Schema({

    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    username:  {
        type: String,
        required: true
    },
    password:  {
        type: String,
        required: true
    }
});

//exporting the model
var Admin = module.exports = mongoose.model('Admins', adminSchema);

module.exports.createAdmin = function(newAdmin, callback){
    // hashing the password
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(newAdmin.password, salt, (err, hash) => {
            if(err) throw err;
            // set password to hash
            newAdmin.password = hash;
            newAdmin.save(callback);
        });
    });
}

//get admin function
module.exports.getAdminByUsername = function(username, callback){
    var query = {username: username};
    Admin.findOne(query, callback);
}

//get admin function
module.exports.getAdminById = function(id, callback){
    Admin.findById(id, callback);
}

//compare password function
module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch){
        if(err) throw err;
        callback(null, isMatch);
    });
}
