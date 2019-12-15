const { createServer } = require("http");
const fs = require("fs");
const router = require("./router.js");

const postsFile = __dirname + "/posts.json";
if (!fs.existsSync(postsFile)) {
  fs.writeFileSync(postsFile, "[]");
}

const server = createServer(router);

server.listen(1234, () => console.log(`Listening on http://localhost:1234`));
