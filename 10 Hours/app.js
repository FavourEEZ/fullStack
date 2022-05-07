const express = require("express");
const app = express();
const port = 10001;
const path = require('path');

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')))


app.get("/", (req, res) => {
    res.render("home");
});

app.get("/timesheets", (req, res) =>{
    res.render("timesheets")
})

app.listen(port, () =>{
    console.log(`currently listening on port ${port}`)
})