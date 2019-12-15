const pageTemplate = require("../pageTemplate");

function missing(message) {
  return pageTemplate(`
  <h1>Error</h1>
  <p>${message}</p>
`);
}

module.exports = missing;
