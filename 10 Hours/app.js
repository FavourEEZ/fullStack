const express = require("express");
const app = express();
const port = 10000;
const path = require('path');
const chart = require("chart.js");

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

// app.post("/signup", async(req, res) =>{
//     const {username, email, password } = req.body;

// })

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.listen(port, () =>{
    console.log(`currently listening on port ${port}`)
})
module.exports.chart = chart;