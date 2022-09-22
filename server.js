var express=require("express")

var app=express()

var mongoose=require("mongoose")

mongoose.connect("mongodb://localhost/signinpage",()=>{
    console.log("connected")
},(e)=>{
    console.error(e)
})

app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))


app.post("/pos",(req,res)=>{
    var mongoose=require("mongoose")

    var signin = mongoose.Schema({
        mail:String,
        password:String
    })
    
    var user=mongoose.model("user",signin);

  var user=new user({
      mail:req.body.mail,
      password:req.body.password
  }) 
   
  user.save()
    
  res.redirect("/home.html")
})




app.listen(3002);