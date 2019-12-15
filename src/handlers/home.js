const home = require("../views/home");

function handleHome(request, response) {
  response.statusCode = 200;
  response.end(home());
}

module.exports = handleHome;
