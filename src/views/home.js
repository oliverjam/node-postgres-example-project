const html = require("../html");

function home() {
  return html(`
  <h1>Blogr</h1>
  <form action="/submit" method="POST">
    <label for="author">Your name</label>
    <input id="author" name="author" />
    <label for="post">Post</label>
    <textarea id="post" name="post"></textarea>
  </form>
`);
}

module.exports = home;
