const express = require('express'); 
const router = express.Router(); 

const RotasMariana= require ('./routes-mariana');

router.use('/',RotasMariana);

module.exports = router;