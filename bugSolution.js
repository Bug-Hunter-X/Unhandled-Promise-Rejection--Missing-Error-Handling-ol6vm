const http = require('http');

const server = http.createServer((req, res) => {
  // Improved error handling
  try {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

//Proper error handling for the server
server.on('error', err => {
  console.error('Server error:', err);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});