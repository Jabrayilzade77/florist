import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

const ProductsSchema = new mongoose.Schema({
  image: String,
  title: String,
  price: Number,
});

const ProductModel = mongoose.model("products", ProductsSchema);

app.get("/myapp", async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.send(products);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching products' });
  }
});

app.get("/myapp/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    res.send(product);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching product' });
  }
});

app.delete("/myapp/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findOneAndDelete({ _id: id });
    res.send(product);
  } catch (error) {
    res.status(500).send({ message: 'Error deleting product' });
  }
});

app.post("/myapp", async (req, res) => {
  try {
    const obj = req.body;
    const data = new ProductModel(obj);
    await data.save();
    console.log(data);
    res.send(data);
  } catch (error) {
    res.status(400).send({ message: 'Invalid data' });
  }
});

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Bad JSON');
    return res.status(400).send({ message: 'Invalid JSON' });
  }
  next();
});

mongoose
  .connect("mongodb+srv://bd813qhzt:bd813qhzt@cluster0.6usepho.mongodb.net/")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("not"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
