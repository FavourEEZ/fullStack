const express = require("express");
const app = express();
const port = 10000;
const path = require('path');
const chart = require("chart.js");
const ejsMate = require('ejs-mate');
const methodOverride = require("method-override");
const { v4: uuidv4 } = require("uuid") //Destructuring and providing a new name to the module
uuidv4(); // CommonJS syntax
// import { v4 as uuidv4 } from 'uuid';
// uuidv4() Using ES6 module syntax

const bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(express.urlencoded({extended: true}))
// app.use(express.json())

app.use(methodOverride("_method")) //Allows us to use other HTTP methods like PATCH and DELETE, when _method is referenced, we put the method we want like patch: ?_method=PATCH
app.engine('ejs', ejsMate)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")) //Allows us to run our server from any dir without outputing any errors. Get current dir for app.js and join the full path to /views 
app.use(express.static(path.join(__dirname, 'public'))) //Serving static files. __dirname gets absolute path to app.js then adds public

let userList = [{username: "admin", email: "admin@admin.com", password: "admin"},
{username: "Natalie Portman", email: "natalieportman@gmail.com", password: "Genius"}]

let leaderboardList = [{//username: "admin",
                        date: [],
                        hours: []},
]

function saveSignUps(username, email, password, res) {
    console.log("saveSignUps called");
    userList.push({username, email, password})
    console.log(`Amount of values: ${userList.length}`)
    res.render("dashboard", {username: username})
}

app.get("/", (req, res) => {
    res.render("home", {time: "Time"});
});

app.get("/about", (req, res) =>{
    res.render("about")
})

app.get("/leaderboard", (req, res) => {
    topUsers = [{name: "Natalie Portman", hours: 10},
                {name: "Elon Musk", hours: 17},
                {name: "Tony Stark", hours: 12},
                {name: "Thor", hours: 3},
                {name: "FavourEEZ", hours: 18},
                {name: "Elisabeth Olsen", hours: 5},

          ]

    res.render("leaderboard", {topUsers: topUsers}); //If it was a nested object, would've just used spread {topUsers: ...topUsers} Lc. 351 (Udemy)
})

app.get("/dashboard", (req, res) =>{
    res.render("dashboard")
})

app.post("/dashboard", urlencodedParser, (req, res) =>{
    console.log("Post request from /entry:", req.body)
    const {date, hours} = req.body
    leaderboardList.push({date, hours})
    console.log(leaderboardList)
    //TODO: How to get the currently signed in user? && Have it posted with the req body from the client side
    //TODO: Make middleware to keep users signed in
    //TODO: change res.render to res.redirect for routes like POST /signup
    res.render("dashboard")
})

app.get("/dashboard/entry", (req, res ) => {
    res.render("entry");
})

app.get("/login", (req, res) =>{
    res.render("loginPage")
})

app.post("/login", urlencodedParser, (req, res) =>{
    console.log(`Login Request body: `, req.body)
    const {username, password } = req.body;
    if (userList.length === 0){
        console.log("Please sign up first")
    } else {
        let authenticated = userList.find(el => el.username === username && el.password === password);
        if (authenticated){
            console.log("Yesss!")
        } else {
            console.log(`Username: ${username} and password: ${password} was not found`)
            console.log("Password or username not found!") 
        }
    }
})

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.post("/signup", urlencodedParser, (req, res) =>{
    console.log(req.body);
    const {username, email, password } = req.body;
    saveSignUps(username, email, password, res)
})

// app.get("/search", (req, res) =>{
//     console.log(req.query) // /search?q=cat
//     const {q} = req.query //Assuming that there is query string called q.
// })

app.listen(port, () =>{
    console.log(`currently listening on port ${port}`);
})
module.exports.chart = chart;
