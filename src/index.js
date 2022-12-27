const express=require('express');
const mongoose=require('mongoose');
const route=require("../routes/routes")
const bodyparser=require("body-parser")
const app=express()
app.use(bodyparser.json());
app.use('/',route)
mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://kimmi_kumari:kimmi@cluster0.mfdc6.mongodb.net/customer_1?retryWrites=true&w=majority",{
    useNewUrlParser: true
})

.then(()=>{
    console.log('mongoose is connect')
})
.catch((err)=>{
    console.log(err.message)
})

app.listen(process.env.PORT ||3000,function(){
    console.log("server is connected")
})