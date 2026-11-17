import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
import Contactroute from "./routes/route.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/api/contact", Contactroute);
//connect to mongodb
console.log("MongoDB URI exists:", !!process.env.MONGO);
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(`Mongodb connected successfully`);
  })
  .catch((err) => {
    console.log(`Database connection error: ${err.message || err}`);
    process.exit(1);
  });
app.listen(PORT, () => {
  console.log(`Server running at port:${PORT}`);
});
