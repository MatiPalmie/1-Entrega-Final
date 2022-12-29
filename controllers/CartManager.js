const fs = require("fs");

class CartManager {
  constructor(filename,productsPath) {
    this.path = filename;
    this.productsPath = productsPath;
    if (fs.existsSync(this.path)) {
      this.carts = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    } else {
      this.carts = [];
    }
  }
  async createCart() {
    let newCart = {
      products: [],
    };
    let cartLength = this.carts.length;
    console.log(cartLength);
    if (cartLength === 0) {
      newCart["id"] = 1;
    } else {
      newCart["id"] = this.carts[cartLength - 1]["id"] + 1;
    }
    this.carts.push(newCart);
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.carts, null, "\t")
    );
  }
  async getProduct(id){
    let cartFind = this.carts.find((e)=>e["id"]===id)
    return cartFind;
  }
  async addProduct(cid,pid,quantity){
    let cartFind = this.carts.find((e)=>e["id"]===cid)
    let products = JSON.parse(fs.readFileSync(his.productsPath, "utf-8"));
    let productFind = products.find((e)=>e.id === pid);
    let productQuantity
    if(cartFind["products"]["id"] === pid){
        productQuantity = cartFind["products"]["id"]["quantity"]+quantity;        
    }else{
        productQuantity = quantity;
    }
    let newProduct ={
        id:productFind.id,
        quantity: productQuantity 
    }

  }
}

const cartPc = new CartManager("carts.json");

module.exports = cartPc;
