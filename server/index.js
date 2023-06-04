import dotenv from "dotenv";

import connectToDb from "./database.js";
import express from "express";

//routes
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectToDb();
const app = express();

app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
