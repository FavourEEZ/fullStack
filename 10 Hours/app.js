const express = require("express");
const app = express();
const port = 10000;
const path = require('path');
const chart = require("chart.js");
const ejsMate = require('ejs-mate');

const bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.engine('ejs', ejsMate)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname), "/views") //Allows us to run our server from any dir without outputing any errors. Get current dir for app.js and join the full path to /views 
app.use(express.static(path.join(__dirname, 'public')))

arr = []
function saveSignUps(username, email, password, res) {
    console.log("saveSignUps called");
    arr.push({username, email, password})
    console.log(`Amount of values: ${arr.length}`)
    res.render("dashboard", {username: username})
}

app.get("/", (req, res) => {
    res.render("home", {time: "Time"});
});

app.get("/dashboard", (req, res) =>{
    res.render("dashboard")
})

app.post("/dashboard", (req, res) =>{
    console.log(`Post request from /entry: ${req.body}`, req.body)
    // const {date, hours} = req.body
    res.render("dashboard")
})

app.get("/login", (req, res) =>{
    res.render("loginPage")
})

app.post("/login", urlencodedParser, (req, res) =>{
    console.log(`Login Request body: `, req.body)
    const {username, password } = req.body;
    if (arr.length === 0){
        console.log("Please sign up first")
    } else{
        arr.forEach(element => {
            console.log(element)
        if (username == element.username){
            console.log("username checks")
        }
        if (password == element.password) {
            console.log("password checks")  
        }
        if (username == element.username & password == element.password){
            console.log("You are in!")
            res.render("dashboard", {username: username})
        } else {
            console.log(`Username: ${username} and password: ${password} was not found`)

        }
        });   
    }
    // res.send('welcome back, ' + req.body.username)
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.post("/signup", urlencodedParser, (req, res) =>{
    console.log(req.body);
    const {username, email, password } = req.body;
    saveSignUps(username, email, password, res)
    // res.send('Signed Up!, ' + req.body.username)
})

app.get("/entry", (req, res ) => {
    res.render("entry");
})

// app.get("/search", (req, res) =>{
//     console.log(req.query) // /search?q=cat
//     const {q} = req.query //Assuming that there is query string called q.
// })

app.listen(port, () =>{
    console.log(`currently listening on port ${port}`);
})
module.exports.chart = chart;
