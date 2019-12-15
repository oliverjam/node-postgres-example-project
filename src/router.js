const html = require("./html");

function router(request, response) {
  response.statusCode = 200;
  response.end(html(`<h1>Hello world</h1>`));
}

module.exports = router;
