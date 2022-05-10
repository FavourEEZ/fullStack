const express = require("express");
const app = express();
const port = 10000;
const path = require('path');

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

app.listen(port, () =>{
    console.log(`currently listening on port ${port}`)
})