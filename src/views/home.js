const html = require("../pageTemplate");

function homeView(posts) {
  return html(`
  <h1>Blogr</h1>
  <form action="/submit" method="POST">
    <label for="author">Your name</label>
    <input id="author" name="author" required />
    <label for="title">Post title</label>
    <input id="title" name="title" required />
    <label for="body">Post</label>
    <textarea id="body" name="body" required></textarea>
    <button>Submit</button>
  </form>
  <h2>Posts</h2>
  <ul>
  ${posts
    .map(
      post => `<li>
  <h3>${post.title}</h3>
  <p>${post.author}</p>
  </li>`
    )
    .join("")}
  </ul>
`);
}

module.exports = homeView;
