const missing = require("./views/missing");
const handleHome = require("./handlers/home");
const handleSubmit = require("./handlers/submit");

function router(request, response) {
  switch (request.url) {
    case "/":
      handleHome(request, response);
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
