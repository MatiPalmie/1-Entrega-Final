const express = require("express");
const productsRoutes = require("./routes/products.routes");
const cartRoutes = require("./routes/cart.routes");
const app = express();

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/', productsRoutes,cartRoutes);

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
