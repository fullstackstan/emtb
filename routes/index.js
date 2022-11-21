const express = require('express')
const router = express.Router()

//*desc  Landing Page
//*route  get/
router.get('/',(req,res)=>{
    res.send('main')
})

//*desc  Profile Page
//*route  get /profile
router.get('/profile',(req,res)=>{
    //layout test
    var locals = {
        title: 'Page Title',
        description: 'Page Description',
        header: 'Page Header',
        layout: './layouts/login.ejs'
      };
      res.render('login', locals);
      //end test

    // res.render('login')
})

//*desc  Dashboard Page
//*route  get /dashboard
router.get('/dashboard',(req,res)=>{
    res.render('./layouts/dashboard')
})

module.exports = router