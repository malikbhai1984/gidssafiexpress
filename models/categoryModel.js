
const mongoose = require("mongoose");


const categoryModel = new mongoose.Schema({
    category : {
        type: String,
        required: true,
         unique: true
    },

});

module.exports = mongoose.model("addcategory", categoryModel);