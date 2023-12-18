const contactR=require('../controllers/contact');
const express = require("express");
const router = express.Router();
// you have put "userId" (ouktbha kima haka ba3d) in the body 
// follow the fetch ,you find it in index.html in public folder
router.post("/addContact/:userId",contactR.addContactsController);
module.exports=router;