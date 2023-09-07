




// this code video name techinfo yt

const categoryModel = require(`../models/CategoryModel`);

//import slugify from "slugify";
const slugify = require("slugify");

module.exports.addcat = async (req, res) =>{

  const category = req.body.category;

  const addCategory = await categoryModel({category, slug: slugify(category)});

  const result = await addCategory.save()

  if(result){
    return res.send({code: 200, message: "category add"})
  }else{
    return res.send({code:400, message: "server error"})
  }

 
    
    }



    //get category
    module.exports.getcat = async( req, res) =>{
          
  try{

    const category = await categoryModel.find({})
    res.status(200).send({
      success: true,
      message: true,
      category,
    })

  }catch(err){
    console.log(err)
    res.status(500).send({
      success: false,
      err,
      message: "error while getting all categories"
    })
  }

    }




  
