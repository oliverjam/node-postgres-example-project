const { createServer } = require("http");

const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end(`<h1>Hello world</h1>`);
});

server.listen(1234, () => console.log(`Listening on http://localhost:1234`));
