const express = require ('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

mongoose.Promise=Promise
mongoose.connect('mongodb://localhost:27017/angulardb')
.then(()=> console.log('Mongoose up'))

const User = require('./models/users')

app.use(bodyParser.json())

app.post('/api/login' ,async (req,res)=>{
  const {email , password} = req.body
  console.log(email,password)
  const resp = await User.findOne({email,password})

  if (!resp){
console.log("incorrect details")
res.json({
  success:false,
  message:"Incorrect details"
})
  }else{
    res.json({
      success:truemo
    })
console.log("logging you in ")
  }
  //res.send("k")
} )

app.post('/api/register',async (req,res)=>{
  const {email,password} =req.body
  const existingUser = User.findOne({email})
  if(existingUser){
    res.json({
      success:false,
      message:"Email already is use "
    })
    return 
  }
  const user = new User({
    email,
    password
  })
  const result = await user.save()
  console.log(result)
  res.json({
    success:true,
    message:"welcom !"
  })

})

app.listen(1234,()=> console.log('Server listening at 1234'))