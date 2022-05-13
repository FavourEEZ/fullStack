const express = require("express");
const app = express();
const port = 10000;
const path = require('path');
const chart = require("chart.js");

const bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.render("home", {time: "Time"});
});

app.get("/timesheets", (req, res) =>{
    res.render("timesheets")
})

app.get("/login", (req, res) =>{
    res.render("loginPage")
})

app.post("/login", urlencodedParser, (req, res) =>{
    console.log(req.body)
    const {username, password } = req.body;
    res.render("timesheets", {username: username})
    // res.send('welcome back, ' + req.body.username)
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.post("/signup", urlencodedParser, (req, res) =>{
    console.log(req.body)
    const {username, email, password } = req.body;
    // res.send('Signed Up!, ' + req.body.username)
})

app.listen(port, () =>{
    console.log(`currently listening on port ${port}`)
})
module.exports.chart = chart;