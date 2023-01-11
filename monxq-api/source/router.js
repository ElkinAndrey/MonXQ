const express = require('express');
const monitor = require('./monitorSchema.js');
const router = new express.Router();
router.get('/monitors', async (req, res)=>{
      try{
            var monitors = await monitor.find({}, {_id: true, name: true, price: true, description: true});      
            res.status(200).json(monitors);  
      }catch(ex){
            res.status(500).json(ex.message);
      }   
});
router.get('/monitor/:_id', async (req, res)=>{
      try{
            var monitor_info = await monitor.find({_id: req.params._id});      
            res.status(200).json(monitor_info);  
      }catch(ex){
            res.status(500).json(ex.message);
      }   
});
module.exports = router;
return router;