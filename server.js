import http from "http";

const PORT = 8000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type": "text/html"});
    res.end("<h1>Welcome!</h1>");
});

server.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`)
});
