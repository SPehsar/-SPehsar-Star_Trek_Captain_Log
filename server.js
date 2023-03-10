require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const reactViews = require('express-react-views')
const mongoose = require("mongoose")
const methodOverride = require('method-override');
const logsController = require("./controllers/logController")

// ===== Connection to Database =====
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once("open",() => {
  console.log("connected to mongo")
})

// Setup Engine
app.set("view engine", "jsx")
app.engine("jsx", reactViews.createEngine())

// ===== Middleware =====
app.use((req, res, next) => {
  console.log("Im running for all routes")
  console.log("1. middleware")
  next()
})
app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))

// ===== Routes =====
app.use("/logs", logsController)

// The following "catch all" route (note the *) is necessary
// to return the /logs on all non-AJAX requests
// // ---------------------------------------------- build 
app.get("/*", (req, res) => {
  res.redirect("/logs")
})
// ----------------------------------------------------

// ===== Port setup =====
app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
});
