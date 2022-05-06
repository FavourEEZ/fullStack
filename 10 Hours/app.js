const express = require("express");
const app = express();
const port = 10001;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/timesheets", (req, res) =>{
    res.render("timesheets")
})

app.listen(port, () =>{
    console.log(`currently listening on port ${port}`)
})