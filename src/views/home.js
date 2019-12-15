const html = require("../pageTemplate");

function homeView(posts) {
  return html(`
  <h1>Blogr</h1>
  <form action="/submit" method="POST">
    <h2>New post</h2>
    <label for="author">Your name</label>
    <input id="author" name="author" required />
    <label for="title">Post title</label>
    <input id="title" name="title" required />
    <label for="body">Post</label>
    <textarea id="body" name="body" rows="6" required></textarea>
    <button>Submit</button>
  </form>
  <h2>Posts</h2>
  <ul class="posts">
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
