const { createServer } = require("http");
const path = require("path");
const fs = require("fs");
const router = require("./router.js");

const postsPath = path.join(__dirname, "posts.json");
if (!fs.existsSync(postsPath)) {
  fs.writeFileSync(postsPath, "[]");
}

const server = createServer(router);

server.listen(1234, () => console.log(`Listening on http://localhost:1234`));
