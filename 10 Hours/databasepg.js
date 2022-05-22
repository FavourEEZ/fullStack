// Web Developer Bootcamp 2022.
// Lecture 364: get, post, get
// Lecture 365: uuid
// Lecture 366 Patch -- (Key point: Immutability is critical. Not changing objects is important)
// Lecture 367 FORM to PATCH HTML Forms in our browser can only send GET and POST requests not PATCH, PUT, DELETE requests
//...To get around this restriction in HTML forms, we use method-override package which lets us use HTTP verbs like PUT and DELETE where the client doesn't support it

let comments = [
    {
        id: uuidv4(),
        username: "SSSniperWolf",
        comment: "Woof woof"
    },
    {
        id: uuidv4(),
        username: "KSI",
        comment: "God is good"
    },
    {
        id: uuidv4(),
        username: "Logan Paul",
        comment: "Great work man"
    },
    {
        id: uuidv4(),
        username: "Mr Beast",
        comment: "Love it!"
    }
]

app.get("/comments/new", (req, res) => {
    res.render("comments/new");
})

app.post("/comments", (req, res) =>{
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuidv4() })
    res.redirect("/comments");
})

app.get("/comments/:id", (req, res) =>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/show");
})

app.patch("/comments/:id", (req, res) =>{
    //To update the comment, we need the id, find the comment that we currently have
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const storedComment = comments.find(c => c.id === id);
    //Then update the comment based on the payload that was sent in the request body.
    storedComment.comment = newCommentText;
    res.redirect("comments") //Like with post route, we don't respond with a render, we redirect.
})

app.get("/comments/:id/edit", (req, res) =>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render("comments/edit", { comment })
/*in edit.ejs
<form method="POST" action="/comments/<%=comment.id%>/?_method=PATCH">
    <textarea name="comment" id="" cols="30" rows="10">
        <%= comment.comment %>
    </textarea>
    <button>Save</button?
</form>
    */
})

//You can also use javascript on the client side to delete elements
app.delete("/comments/:id", (req, res) =>{
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id); //Comments.filter makes a new array "We make a copy and filter elements out of that copy" Filter out elements that do not match in the array and make a new array containing them | We do not mutate the array here
    res.redirect("comments")

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