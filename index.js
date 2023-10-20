const express = require('express');
const app = express();

// Get the dynamic port from the environment variable
const port = process.env.PORT || 3000;

// Create a simple home page
app.get('/', (req, res) => {
  res.send('index.html');
});

// Start the server on the dynamic port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});