// Create web server with express
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// Create a server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create an object to store comments
const commentsByPostId = {};

// Create a route to get comments by postId
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// Create a route to create comments
app.post('/posts/:id/comments', (req, res) => {
  // Generate a random ID for the comment
  const commentId = randomBytes(4).toString('hex');
  // Get the content of the comment
  const { content } = req.body;
  // Get the comments array for the post
  const comments = commentsByPostId[req.params.id] || [];
  // Add the comment to the array
  comments.push({ id: commentId, content });
  // Update the comments array
  commentsByPostId[req.params.id] = comments;
  // Return the comment
  res.status(201).send(comments);
});

// Listen to port 4001
app.listen(4001, () => {
  console.log('Listening on 4001');
});