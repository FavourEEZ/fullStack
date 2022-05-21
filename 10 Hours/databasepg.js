//
comments = [
    {
        id: 1,
        username: "SSSniperWolf",
        comment: "Woof woof"
    },
    {
        id: 2,
        username: "KSI",
        comment: "God is good"
    },
    {
        id: 3,
        username: "Logan Paul",
        comment: "Great work man"
    },
    {
        id: 4,
        username: "Mr Beast",
        comment: "Love it!"
    }
]

app.get("/comments/:id", (req, res) =>{
    const {id} = req.params
    const comment = comments.find(c => c.id === parseInt(id))
    res.render("comments/show")
})

///////Postgres connection
// const {Client} = require('pg')

// const client = new Client ({
//     host: "localhost",
//     user: "postgres",
//     port: "rootUser",
//     password: "rootUser",
//     database: "postgres" 
// })

// client.connect();

// client.query(`Select * from users`, (err, res) =>{
//     if(!err){
//         console.log(res.rows);
//     } else {
//         console.log(err.message)
//     }
//     client.end;
// })