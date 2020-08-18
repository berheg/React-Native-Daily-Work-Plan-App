const express = require('express');
const router = express.Router();

//router for end point '/triangle'
router.get('/', (req, res) =>{
    const dailyWork =[
        {
          id: '1',
          text: 'Prepare daily plan',
        },
        {
          id: '2',
          text: 'Manage routine',
        },
        {
          id: '3',
          text: 'Contact company',
        },
        {
          id: '4',
          text: 'Update work plan and get ready next plan',
        },
      ];
      if(req.query.dailyWorkPlan){
        dailyWork.push(req.query.dailyWorkPlan);
      }   
    res.json(dailyWork);
})

module.exports = router;