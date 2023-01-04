const router = require("express").Router();
const cartPc = require("../controllers/CartManager");

router.post("/carts", async (req, res) => {
  cartPc.createCart();
  res.status(200).json('Carrito Creado')
});
router.get("/carts/:cid", async (req, res) => {
  let cid = parseInt(req.params.cid);
  let cart = await cartPc.getCart(cid);
  res.status(200).json(cart);
});
router.post("/:cid/product/:pid", async (req, res) => {
  let cid = parseInt(req.params.cid);
  let pid = parseInt(req.params.pid);
  await cartPc.addProduct(cid, pid);
});

module.exports = router;
