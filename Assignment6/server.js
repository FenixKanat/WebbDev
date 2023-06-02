const express = require('express');
const app = express();
const path = require('path');

const port = 3000; // Choose a port number for your server

// Serve static files from the 'Assignment6' directory
app.use(express.static(path.join(__dirname)));

// Handle requests for the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'firstPage.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
