

const mongoose = require('mongoose');

const AdminModel = mongoose.model('admin', {
    type: String,
    userName: String,
    password: String,
    status: String,
    date: String,
});


module.exports = AdminModel



AdminModel.create({
    type:  'ADMIN',
    userName : 'admin-default',
    password: 'pass123',
    status: 'ACTIVE',
    date: new Date(),
})