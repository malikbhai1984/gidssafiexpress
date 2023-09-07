


//get admin api

const AdminModel = require("../models/AdminModel");
const jwt = require('jsonwebtoken');

module.exports.getAdmins = async (req,res) =>{
    const _data = await AdminModel.find({});

    if(_data) {
        return res.send ({code: 200, message: 'success', data: _data})
        
    }else{
        return res.send({code: 500, message: "Admin Error"})
    }


}


//add Admin 

module.exports.addAdmins = async (req,res) =>{

    const {userName, password, type, status, date} = req.body;
    const _result = await AdminModel.create({userName, password, type, status, date});

    if(_result) {
        return res.send ({code: 200, message: 'success', })
        
    }else{
        return res.send({code: 500, message: "Admin Error"})
    }


}

//Login Admin api

module.exports.loginAdmin = async (req, res) =>{

    const { userName, password } = req.body;

    const userExists = await AdminModel.findOne({userName : userName})

    if(userExists) {

        if(userExists.password !==  password){
            return res.send({ code: 400, message: "userName or Password wrong"})
        }

        console.log(userExists, 34)
        const _token = jwt.sign( {...userExists}, 'PRIV_123')

        return res.send({ 
            code: 200, 
            message: "Loign Sucess", 
            token : _token ,
            type : userExists.type})
    }else{
        return res.send({ code: 500, message: "services Error"})
    }

}

