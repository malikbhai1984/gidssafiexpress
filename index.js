
const express = require("express")
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const cors = require("cors");
//const formidable = require('express-formidable');


const servicesController = require('./controller/servicesController');
const AdminControllers = require('./controller/AdminController');
const categoryController = require('./controller/categoryController');
const postController = require('./controller/postController')

const PdfController = require('./controller/PdfController')
//media controller

const mediaController  = require('./controller/MediaController')

const multer = require('multer');
//const servicesMode = require("./models/servicesMode");
const upload = multer({ dest: 'uploads/' });
 



const app = express()

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'))


//student thesis pdf
const pdf = multer({dest: "pdf/"}) 
app.use(`/pdf`, express.static(`pdf`));

//video folder
//const video = multer({dest: "videos/"}) 
//app.use(`/videos`, express.static(`videos`));

const videoUpload = multer({ dest: "videos/" });
app.use("/videos", express.static("videos"));


mongoose.connect('mongodb://localhost:27017/text', { bufferTimeoutMS: 30000,}, (err)=>{
    if(err){
        console.log('db err')
    }else{
        console.log('DB Connected')
    }
});



app.get('/hello', (req,res)=>{
    return res.send("hello")
})

//new post services api
app.post('/post', postController.addnewpost)



///Services apis
app.post('/api/services', upload.single('image'), servicesController.addServices);
app.get('/api/services', servicesController.getServices);

//app.get('/api/slider', servicesController.getSlider);

//Admin apis
app.get('/admin/admins', AdminControllers.getAdmins)
app.post('/admin/add', AdminControllers.addAdmins)

app.post('/admin/login', AdminControllers.loginAdmin)



//pdf file upload 
app.post('/pdf', pdf.single("pdf"), PdfController.addpdf);

app.get('/download/pdf/:id',  PdfController.getpdf);
//app.get('/download/pdf/:id', PdfController.downloadpdf);
app.get('/download/pdf/:id', PdfController.downloadpdf);


//medai video controller api
app.post('/create/video',videoUpload.single("video"), mediaController.createvideo )
app.get('/get/video-url', mediaController.getvideo )

//category apis
app.post('/add/category', categoryController.addcat);
app.get('/get/categories', categoryController.getcat);

app.listen(5000, () =>{
    console.log('Backend Running at port 5000')
})