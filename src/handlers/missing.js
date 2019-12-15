const error = require("../views/error");

function handleMissing(request, response) {
  const html = error("Page not found");
  response.writeHead(404, { "content-type": "text/html" });
  response.end(html);
}

module.exports = handleMissing;
