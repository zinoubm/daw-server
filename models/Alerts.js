const mongoose = require("mongoose");
// import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const SchemaTypes = mongoose;
const AlertsSchema = new Schema({
  id_Utilisateur: {
    type: SchemaTypes.ObjectId,
    ref: "Utilisateur",
  },
  notification : String, // alertContact || updateQuestionnaire || updateQst || isAcceptNot
  value :Boolean,
  vue :{
    type:Boolean,
    default:false
  },
  date_alert:{
    type: Date,
    default: Date.now()
  }
});
module.exports = mongoose.model("Alerts", AlertsSchema);
