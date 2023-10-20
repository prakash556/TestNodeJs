const express = require('express');
const app = express();

// Get the dynamic port from the environment variable
const port = process.env.PORT || 3000;

// Create a home page
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to my website!</h1>
    <p>Click on the links below to learn more about me.</p>
    <ul>
      <li><a href="/contact">Contact me</a></li>
      <li><a href="/bio">My bio</a></li>
    </ul>
  `);
});

// Create a contact page
app.get('/contact', (req, res) => {
  res.send(`
    <h1>Contact me</h1>
    <p>My email address is john.doe@example.com.</p>
  `);
});

// Create a bio page
app.get('/bio', (req, res) => {
  res.send(`
    <h1>My bio</h1>
    <p>I am a software engineer at Google.</p>
  `);
});

// Start the server on the dynamic port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});