const express = require('express');
const monitor = require('./monitorSchema.js');
const router = new express.Router();
router.get('/monitors', async (req, res)=>{
      try{
            var monitors = await monitor.find({});      
            res.status(200).json(monitors);  
      }catch(ex){
            res.status(500).json(ex.message);
      }   
});
module.exports = router;
return router;