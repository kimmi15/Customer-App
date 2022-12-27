const express=require('express');
const router=express.Router()
router.get('/getall',function(req,res){
    res.send("hello")
})
const { createCustomer , getCustomerDetail,deleteCustomer}=require('../src/controllers/customerController');
const {createCard, getcard}=require('../src/controllers/cardControllers')

//CUSTOMER API
router.post('/customer',createCustomer)   //CREATE CUSTOMER REQUEST
router.get('/getcustomer', getCustomerDetail);  //GET CUSTOMER DETAILS REQUEST
router.delete('/deletecustomer/:customerId',deleteCustomer)//DELETE CUSTOMER REQUEST

//CARD API
router.post('/createCard',createCard)
router.get('/getCard', getcard)
module.exports=router;