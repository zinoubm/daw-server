const express = require("express");
const alertModel= require("../models/Alerts")
const router = express.Router();

const {
  deleteAlerteControll,
  getAlertesControll,
  getAlertsAcceptUser
} = require("../controllers/alertController");

router.route("/alert/:idAlert").delete(deleteAlerteControll);
router.route("/alert").get(getAlertesControll);
//getAlertsAcceptUser
router.route('/alert/acceptUser').get(getAlertsAcceptUser);

// get alerts not vue 
//update qst alert
router.route('/alert/updateQst/Nvue/:idUser').get(async (req,res)=>{
  await alertModel.find({id_Utilisateur:req.params.idUser,notification :'updateQst',vue:false}).sort({ date_alert: 1 }).
  then((r)=>{
    res.send(r);
  });
});
// update updateQuestionnaire
router.route('/alert/updateQuestionnaire/Nvue/:idUser').get(async (req,res)=>{
  await alertModel.find({id_Utilisateur:req.params.idUser,notification :'updateQuestionnaire',vue:false}).sort({ date_alert: 1 }).
  then((r)=>{
    res.send(r);
  });
});
// is accepted alert
router.route('/alert/isAcceptNot/Nvue/:idUser').get(async (req,res)=>{
  await alertModel.find({id_Utilisateur:req.params.idUser,notification :'isAcceptNot',vue:false}).sort({ date_alert: 1 }).
  then((r)=>{
    res.send(r);
  });
});
// cnatct alert
router.route('/alert/contact/Nvue/:idUser').get(async (req,res)=>{
  await alertModel.find({id_Utilisateur:req.params.idUser,notification :'alertContact',vue:false}).sort({ date_alert: 1 }).
  then((r)=>{
    res.send(r);
  });
});


// VUE
// put the alert as reading (ya3ni rahou chaf notification) isAceepted
router.route('/alert/isAcceptNot/readAlert/:idUser').get(async (req,res)=>{
  //{notification :'isAcceptNot',vue:false}
  try{
      let idUser=req.params.idUser;
  await alertModel.updateMany({id_Utilisateur:idUser,notification:'isAcceptNot'},{vue:true});
  res.json({ success: true });
  }catch{
    res.json({ success: false});
  }
});
// put the alert as reading (ya3ni rahou chaf notification) updateQuestionnaire
router.route('/alert/updateQuestionnaire/readAlert/:idUser').get(async (req,res)=>{
  //{notification :'isAcceptNot',vue:false}
  try{
      let idUser=req.params.idUser;
  await alertModel.updateMany({id_Utilisateur:idUser,notification:'updateQuestionnaire'},{vue:true});
  res.json({ success: true });
  }catch{
    res.json({ success: false});
  }
});
// put the alert as reading (ya3ni rahou chaf notification) update qst alert
router.route('/alert/updateQst/readAlert/:idUser').get(async (req,res)=>{
  //{notification :'isAcceptNot',vue:false}
  try{
      let idUser=req.params.idUser;
  await alertModel.updateMany({id_Utilisateur:idUser,notification:'updateQst'},{vue:true});
  res.json({ success: true });
  }catch{
    res.json({ success: false});
  }
});
// put the alert as reading (ya3ni rahou chaf notification) alertContact
router.route('/alert/contact/readAlert/:idUser').get(async (req,res)=>{
  //{notification :'isAcceptNot',vue:false}
  try{
      let idUser=req.params.idUser;
  await alertModel.updateMany({id_Utilisateur:idUser,notification:'alertContact'},{vue:true});
  res.json({ success: true });
  }catch{
    res.json({ success: false});
  }
});

// get alerts  vue 
//update qst alert
router.route('/alert/updateQst/vue/:idUser').get(async (req,res)=>{
  await alertModel.find({id_Utilisateur:req.params.idUser,notification :'updateQst',vue:true}).sort({ date_alert: 1 }).
  then((r)=>{
    res.send(r);
  });
});
// update updateQuestionnaire
router.route('/alert/updateQuestionnaire/vue/:idUser').get(async (req,res)=>{
  await alertModel.find({id_Utilisateur:req.params.idUser,notification :'updateQuestionnaire',vue:true}).sort({ date_alert: 1 }).
  then((r)=>{
    res.send(r);
  });
});
// is accepted alert
router.route('/alert/isAcceptNot/vue/:idUser').get(async (req,res)=>{
  await alertModel.find({id_Utilisateur:req.params.idUser,notification :'isAcceptNot',vue:true}).sort({ date_alert: 1 }).
  then((r)=>{
    res.send(r);
  });
});
// contact alert
router.route('/alert/contact/vue/:idUser').get(async (req,res)=>{
  await alertModel.find({id_Utilisateur:req.params.idUser,notification :'alertContact',vue:true}).sort({ date_alert: 1 }).
  then((r)=>{
    res.send(r);
  });
});
module.exports = router;
