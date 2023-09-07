

const mongoose = require('mongoose') 

module.exports = mongoose.model('postModel', {
    title: String, 
    description: String,
    category:  {
        type: mongoose.ObjectId,
        ref: "category",
        required: true,
    }
   
},
{
    timestamps: true
})