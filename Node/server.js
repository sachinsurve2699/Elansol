const express = require("express")
const cors = require("cors")
const connectDB = require('./DB/config');

const routeruser = require("./router/user")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/user", routeruser)

connectDB();

app.listen(5000, "0.0.0.0", () => {
  console.log("Server started at port  5000")
})
