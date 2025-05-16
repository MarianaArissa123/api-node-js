const express = require('express'); 
const router = express.Router(); 

import RotasMariana from './routes-mariana';

router.use('/',RotasMariana);

module.exports = router;