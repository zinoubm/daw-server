const express = require("express");
const Doctor = require("../models/Medecin");
const Admin = require("../models/Admin");
const Patient = require("../models/Patient");
const Users = require("../models/Utilisateur");
const newQst = require('../models/NewQuestions')
const router = express.Router();

router.route('/getDoctors').get(async (req,res)=>{
    try{
        const doc = await Users.find({role:'DOCTOR'});
        res.json(doc);
    }catch(e){
        console.log(e);
    }
});
router.route('/getAdmins').get(async (req,res)=>{
    try{
        const doc = await Users.find({role:'ADMIN'});
        res.json(doc)
    }catch(e){
        console.log(e)
    }
});
router.route('/getPatients').get(async (req,res)=>{
    try{
        const doc = await Users.find({role:'PATIENT'});
        res.json(doc)
    }catch(e){
        console.log(e)
    }
});
router.route('/addPatientContact').put(async (req,res)=>{
    const {Doc,Patient} = req.body;
   
   const doctor = await Users.findByIdAndUpdate(
    Doc._id,
    {
      $push: { 'contacts': Patient },
    },
    { new: true }
  );
    
    //await doctor.save();
    res.json({
        s:'done',
        doctor
    })
});
router.route('/deletePatientContact').put(async (req,res)=>{
    const {Doc,Patient} = req.body;
   
   const doctor = await Users.updateOne(
    {_id : Doc._id},
    {
      $pull: { 'contacts': Patient },
    }
  );
    
    //await doctor.save();
    res.json({
        s:'done',
        doctor
    })
});
router.route('/addDoctorContact').put(async (req,res)=>{
    const {Doc,Patient} = req.body;
   
   const patient = await Users.findByIdAndUpdate(
    Patient._id,
    {
        $push: { 'contacts': Doc },
    },
    { new: true }
  );
    res.json({
        s:'done',
        patient
    })
});
router.route('/changeDoctorContact').put(async (req,res)=>{
    const {Doc,Patient} = req.body;
   console.log('deleted')
   const doctor = await Users.updateOne(
    {_id : Patient._id},
    {
      $set: { 'contacts': Doc },
    }
  );
    
    //await doctor.save();
    res.json({
        s:'done',
        doctor
    })
});
router.route('/updateUser/:id').put(async (req,res)=>{
    const {id} = req.params;
    const data = req.body;
    const {Nom,Prenom,Gener,email,password,dt_Naiss} = data;
    console.log({Nom,Prenom,Gener,email,password,dt_Naiss})
    const user = await Users.updateOne({_id:id},{Nom,Prenom,Gener,email,password});
    res.json({
        isSuccess : true,
        user:{...data,_id:id}
    })
});
// ######################### ALL ABOUT NEW QUESTION 
router.route('/getNewQst').get(async(req,res)=>{
    try{
        await newQst.find().then((r)=>{
            res.json(r);
        })
    }catch{
        res.json({succes:false});
    }
});
router.route('/updateNewQst').post(async (req,res)=>{
    console.log(req.body)
    try{
        await newQst.updateMany({},req.body);
        res.json({succes:true});
    }catch{
        res.json({succes:false});
    }
});
router.route('/createNewQst').post(async (req,res)=>{
    try{
        const create=await new newQst(req.body);
        create.save();
        res.json({succes:true});
    }catch{
        res.json({succes:false});
    }
});

module.exports = router;