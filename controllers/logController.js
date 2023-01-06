const express = require("express")
const router = express.Router()
const Log = require("../models/logs")

// made correction 
// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show, Error Page, Landing (STARTPAGE) Page

// POINT TO ACTUAL ERROR PAGE - Future Use
const showActualError = (res, err) =>{
  res.status(400).send(err)
};

// CREATING ERROR PAGE ON THE FLY
const showErrorPage = (res, err) => {
  res.status(400).send(
    "<h2 style='text-align: center; padding-top: 200px'>Sorry :( , Zomething zBroke!</h2>" + 
    "<br></br>" +
    "<center><img src='https://wallpapercave.com/wp/wp3492726.jpg' width='400' height='200'></img></center>" +
    '<br></br>' +
    "<p style='text-align: center'>zMake sure to zcomplete both z text boxes.</p>"  + 
    '<br></br>'  + 
    '<center><a href=""><input type="submit" value="Click to Start All Over" /></a></center>'
    )
};

// STARTPAGE
router.get("/", (req, res) => {
  // Query model to return all logs
  Log.find({}, (error, allLogs) => {
    if (!error) {
      res.status(200).render("logs/StartPage", {
        // logs: allLogs
      })
    } else {
      showErrorPage(res, err)
    }
  })
})

// INDEX
router.get("/index", (req, res) => {
  // Query model to return all logs
  Log.find({}, (error, allLogs) => {
    if (!error) {
      res.status(200).render("logs/Index", {
        logs: allLogs
      })
    } else {
      showErrorPage(res, error)
    }
  })
})

// NEW
router.get("/new", (req, res) => {
  res.render("logs/New")
})

// DELETE
router.delete("/:id", (req, res) => {
  Log.findByIdAndDelete(req.params.id, (err, data) => {
    res.redirect("/logs/Index")
  })
})

// UPDATE
router.put("/:id", (req, res) => {
  req.body.shipIsBroken = req.body.shipIsBroken === "on" ? true : false
  Log.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
    if(!err){
      res.status(200).redirect(`/logs/${req.params.id}`)
    } else {
      showErrorPage(res, err)
    }
  })
})

// CREATE
router.post("/", (req, res) => {
  if (req.body.shipIsBroken === "on"){
    req.body.shipIsBroken = true
  } else {
    req.body.shipIsBroken = false
  }
Log.create(req.body, (error, createdLog) => {
    if (!error) {
      res.status(200).redirect("/logs/Index")
    } else {
      showErrorPage(res, error)
    }
  })
})

// EDIT
router.get("/:id/edit", (req, res) => {
  Log.findById(req.params.id, (err, foundLog) => {
    if (!err) {
      res.status(200).render("logs/Edit", {log: foundLog})
    } else {
      showErrorPage(res, err)
    }
  })
})

// SHOW
router.get("/:id", (req, res) => {
  Log.findById(req.params.id, (error, foundLog) => {
    if (!error) {
      res
        .status(200)
        .render("logs/Show", {
          log: foundLog
        })
    } else {
      showErrorPage(res, error)
    }
  })
})

module.exports = router