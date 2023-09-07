


const PdfModel = require('../models/PdfModel');
const path = require('path');

module.exports.addpdf = async (req, res) => {
  const { title, desc } = req.body;
  const pdf = req.file.path;
  //const pdfUrl = req.file.path; // Assuming the PDF file is uploaded and saved in the same location as the image
  const pdfUrl = req.file.path;

  try {
    //const pdf = new PdfModel({ title, desc, category, imageUrl, pdfUrl });
    const signup = await PdfModel({ title, desc, pdf, pdfUrl });
    const result = await signup.save();
    res.send({ code: 200, message: "Data added successfully", data: result });
  } catch (err) {
    console.error(err);
    res.status(500).send({ code: 500, message: "Internal Server Error" });
  }
};

module.exports.getpdf = async (req, res) => {
  try {
    const products = await PdfModel.find({});
    res.send({ code: 200, message: "Get all products", data: products });
  } catch (err) {
    console.error(err);
    res.status(500).send({ code: 500, message: "Internal Server Error" });
  }
};




module.exports.downloadpdf = async (req, res) => {
  const pdfId = req.params.id; // Assuming you pass the PDF ID as a URL parameter

  try {
    const pdf = await PdfModel.findById(pdfId);

    if (!pdf) {
      return res.status(404).send({ code: 404, message: "PDF not found" });
    }

    const pdfPath = pdf.pdfUrl;

    if (!pdfPath) {
      return res.status(404).send({ code: 404, message: "PDF file not found" });
    }

    const fileName = path.basename(pdfPath);

    res.download(pdfPath, fileName, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send({ code: 500, message: "Failed to download PDF" });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ code: 500, message: "Internal Server Error" });
  }
};
