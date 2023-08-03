const connectDB = require("./config/db");
const express = require("express");
const app = express();
const PORT = 8080;
connectDB();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const MovieRoute = require("./routes/movies");
const ListRoute = require("./routes/lists");
const cors = require("cors");
//Stripe
const stripeRoute = require("./routes/stripe");

const plans = new Map([
  [1, { price: 5.99, name: "Bronze" }],
  [2, { price: 7.99, name: "Silver" }],
  [3, { price: 9.99, name: "Gold" }],
]);

dotenv.config();
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/movies", MovieRoute);
app.use("/lists", ListRoute);
app.use("/stripe", stripeRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
