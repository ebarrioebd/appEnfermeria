var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect("/gotas");
});
router.get("/gotas",(req,res)=>{
  res.render('index', { file: 'gotas'});
});
router.get("/gotashoras",(req,res)=>{
  res.render('index', { file: 'gotas'});
})
module.exports = router;
