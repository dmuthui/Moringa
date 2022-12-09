
let express = require("express");
let homeRouter = require("./routes/index");
let homeRouter = require("./routes/about");
let homeRouter = require("./routes/login");

let app = express();//createServer()

app.use("/",homeRouter);
app.use("/about",Router);
app.use("/account",loginhomeRouter);

app.set("view.engine", "ejs"); 

app.get("/",(req,res)=>{
  console.log("Home Page");
  res.send();
});

let PORT = null;
if(process.env.PORT){
  PORT = process.env.PORT;
  console.log('Setting default port ${PORT}') 
}else{
   PORT = 5500;
   console.log('Setting custom port ${PORT}')} 
app.listen(PORT, () =>{
  console.log('Server is starting on port ${PORT}')
})
