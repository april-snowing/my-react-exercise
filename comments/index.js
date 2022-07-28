const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const app = express();


app.use(cors())
app.use(bodyParser.json());
const comments = {}

app.get("/posts/:id/comments", (req, res) => {
    res.send(comments[req.params.id])
})

app.post("/posts/:id/comment", (req, res) => {
    const commentId = randomBytes(4).toString("hex");
    const commentsByPostId = comments[req.params.id] || [];
    const { content } = req.body;
    commentsByPostId.push({ commentId, content });
    comments[req.params.id] = commentsByPostId;
    res.status(201).send(commentsByPostId)
});

app.listen(4001, () => {
    console.log("listen the prot 4001")
})