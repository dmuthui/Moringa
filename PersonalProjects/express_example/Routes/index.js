let express = require("express");
let router = express.router();

router.get("/",(req,res)=>{
  console.log("Home Page");
  res.send("Home Page");
});
router.post("/",(req,res)=>{
  console.log("Home Page");
  res.send("Home Page");

  res.render("index",data);

});

module.exports = router;