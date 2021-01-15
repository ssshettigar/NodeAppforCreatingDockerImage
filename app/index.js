var express = require("express");
var app = express();
app.get("/",(req,resp)=>{
  resp.send("hello from lightweight container");
})
app.listen(9999,()=> console.log("Listening on port 9999"));