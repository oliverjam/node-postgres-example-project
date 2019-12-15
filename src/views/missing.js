const html = require("../html");

function missing() {
  return html(`
  <h1>Page not found</h1>
`);
}

module.exports = missing;
