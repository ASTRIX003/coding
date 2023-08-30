const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>nvigation bar</title>
      <style>
        .navbar {
          background-color: rgb(17, 17, 15);
          border-radius: 30px;
        }
        .navbar li {
          float: left;
          list-style: none;
          
          margin: 13px 20px;
        }
        .navbar ul {
          overflow: auto;
        }  
        .navbar li a {
          text-decoration: none;
          padding: 3px 3px;
          color: blueviolet;
        }
        .search {
          float: right;
          padding: 12px 75px;
         
        }
        .navbar input{
          border: 2px;
          border-radius: 15px;
        }
      </style>
    </head>
    <body>
      <header>
        <nav class="navbar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Faq</a></li>
            <li><a href="#">Back</a></li>
            <div class="search"><input type="text" name="search" id="search" /></div>
            
          </ul>
        </nav>
      </header>
    </body>
  </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});