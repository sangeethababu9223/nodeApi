const http = require("http");
const todos = [
  { id: 1, text: "do one" },
  { id: 2, text: "do two" },
  { id: 3, text: "do three" },
];
const server = http.createServer((req, res) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("X-Powered-By", "Node.js");
  res.end(
    JSON.stringify({
      success: false,
      error: "Not found",
      data: null,
    })
  );
});
const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
