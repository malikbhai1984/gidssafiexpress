




const mongoose =require("mongoose");

const PdfModel = new mongoose.Schema({
    title: String,
    desc: String,
    pdf: String,
   
});

module.exports = mongoose.model("pdf", PdfModel);