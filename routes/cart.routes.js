const router = require('express').Router();
const cartPc = require('../controllers/CartManager');

router.post('/carts',async(req,res)=>{
    cartPc.createCart()
})








module.exports = router