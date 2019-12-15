const { createServer } = require("http");
const router = require("./router.js");

const server = createServer(router);

server.listen(1234, () => console.log(`Listening on http://localhost:1234`));
