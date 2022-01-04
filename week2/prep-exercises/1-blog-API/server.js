const express = require('express');

const app = express();
const fs = require('fs');

app.use(express.json());

// YOUR CODE GOES IN HERE
app.get('/', function (req, res) {
  res.send('Hello World');
});

app.post('/blogs', (req, res) => {
  // How to get the title and content from the request??
  const { title, content } = req.body;

  fs.writeFileSync(title, content);
  res.end('ok');
});

app.put('/posts/:title', (req, res) => {
  // How to get the title and content from the request?
  const { title } = req.params;
  const { content } = req.body;
  console.log(req.body);
  // What if the request does not have a title and/or content?
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('ok');
  } else {
    // Send response with error message
    res.end('This post does not exist!');
  }
});

app.delete('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  const { title } = req.params;
  if (fs.existsSync(title)) {
    // Add condition here
    fs.unlinkSync(title);
    res.end('ok');
  } else {
    // Respond with message here
    res.end('This post does not exist!');
  }
});

app.get('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  const { title } = req.params;
  // check if post exists
  if (fs.existsSync(title)) {
    const post = fs.readFileSync(title);
    res.send(post);
  } else {
    res.end('This post does not exist!');
  }

  // send response
});

app.listen(3000, () => console.log('server running ...'));
