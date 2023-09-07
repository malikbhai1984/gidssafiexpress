

const mongoose = require('mongoose')

const serviceModel = new mongoose.Schema({
    title: String,
    desc: String,
    imageUrl: String,
    category:
     {type : mongoose.ObjectId,
        ref: "category"
    
    }

});

module.exports = mongoose.model('services33', serviceModel)


/*
//Service model saifi code
const mongoose = require('mongoose');

module.exports = mongoose.model('Services22', {
    title: String,
    description: String,
    imageUrl : String,
})


*/

