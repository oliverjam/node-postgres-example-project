const home = require("./views/home");
const missing = require("./views/missing");
const handleSubmit = require("./handlers/submit");

function router(request, response) {
  switch (request.url) {
    case "/":
      response.statusCode = 200;
      response.end(home());
      break;
    case "/submit":
      handleSubmit(request, response);
      break;
    default:
      response.statusCode = 404;
      response.end(missing());
  }
}

module.exports = router;
