import http from "http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  try {
    // Check if GET request
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>Welcome!</h1>");
      } else if (req.url == "/about") {
        res.writeHead(200, { "content-type": "text/html" });
        res.end("<h1>About</h1>");
      } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404 Not Found</h1>");
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
