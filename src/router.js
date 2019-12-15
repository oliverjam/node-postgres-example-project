const handleAssets = require("./handlers/assets");
const handleHome = require("./handlers/home");
const handleSubmit = require("./handlers/submit");
const handleMissing = require("./handlers/missing");

function router(request, response) {
  if (request.url.includes("/assets")) return handleAssets(request, response);
  switch (request.url) {
    case "/":
      handleHome(request, response);
      break;
    case "/submit":
      handleSubmit(request, response);
      break;
    default:
      handleMissing(request, response);
  }
}

module.exports = router;
