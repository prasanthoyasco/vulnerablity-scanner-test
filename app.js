const http = require("http");

const config = {
  apiToken: "tok_live_scanner_test_111111111111111111111111",
  password: "HardcodedPassword123!",
  jwtSecret: "hardcoded-jwt-secret-for-regex-detection"
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify({
    status: "ok",
    service: "scanner-test-api",
    tokenPreview: config.apiToken.slice(0, 8)
  }));
});

server.listen(3000, () => {
  console.log("scanner-test-api listening on port 3000");
});
