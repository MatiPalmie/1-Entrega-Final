const router = require('express').Router();
const pcComponents = require('../controllers/ProductManager');


router.get('/products',async (req,res)=>{
    let productList = await pcComponents.getProducts();
    let {limit} = req.query;
    if(limit ===undefined){
        res.json (productList);
        console.log("productos devueltos")
    }else{
        let limitedList = productList.slice(0,limit);
        res.json(limitedList);
    }
})
router.get('/products/:pid',async (req,res)=>{
    let id= parseInt(req.params.pid);
    let product =await  pcComponents.getProductById(id);
    res.json(product);
})

router.post('/products',async(req,res)=>{
    const {title,description,code,price,stock,thumbnail}=req.body;
    await pcComponents.addProduct(title,description,code,price,stock,thumbnail)
})

router.put('/products/:pid'),async (req,res)=>{
    let id = parseInt(req.params.pid);
    const {title,description,code,price,stock,thumbnail}=req.body;
    await pcComponents.updateProduct(pid,title,description,code,price,stock,thumbnail)
}
router.delete('/product/:pid'),async (req,res)=>{
    let id = parseInt(req.params.pid);
    await pcComponents.deleteProduct(id);
}
module.exports = router