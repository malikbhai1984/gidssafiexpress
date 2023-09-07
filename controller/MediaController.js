


const VideoModel = require('../models/VideoModel')

module.exports.createvideo = async (req, res) =>{

    const { name } = req.body;
    const videoPath = req.file.path;
  
    try {
      const videoData = new VideoModel({ name, video: videoPath });
  
      const result = await videoData.save();
      res.send({ code: 200, message: "Data added successfully", data: result });
    } catch (err) {
      console.error(err);
      res.status(500).send({ code: 500, message: "Internal Server Error" });
    }
}




module.exports.getvideo = async ( req, res) =>{


    try {
        const videos = await VideoModel.find({});
        res.send({ code: 200, message: "Get all videos", data: videos });
      } catch (error) {
        console.log(error);
        res.status(500).send({ code: 500, message: "Internal Server Error" });
      }


    //try{
      //  const video = await VideoModel.find({});
       // res.send({ code: 200, message: "Get all products", data: video });

   // }catch(error){
     //   console.log(error)
   // }

}