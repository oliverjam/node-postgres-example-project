const html = require("./html");

function router(request, response) {
  switch (request.url) {
    case "/":
      response.statusCode = 200;
      response.end(html(`<h1>Hello world</h1>`));
      break;
    default:
      response.statusCode = 404;
      response.end(html(`<h1>Page not found</h1>`));
  }
}

module.exports = router;
