const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;

// Create the server
const server = http.createServer((req, res) => {
    // Determine the path to the index.html file
    const filePath = path.join(__dirname, 'index.html');

    // Read the index.html file asynchronously
    fs.readFile(filePath, (err, data) => {
        if (err) {
            // Handle file read errors
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Error loading index.html');
            return;
        }

        // Set the status code and content type for success
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');

        // Send the HTML content as the response
        res.end(data);
    });
});

// Start the server and listen on the specified port and hostname
server.listen(port, () => {
    console.log(`Server running at port: ${port}/`);
});