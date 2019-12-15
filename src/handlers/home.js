const path = require("path");
const fs = require("fs");
const homeView = require("../views/home");
const errorView = require("../views/error");

function handleHome(request, response) {
  const postsPath = path.join(__dirname, "../posts.json");
  fs.readFile(postsPath, "utf-8", (error, data) => {
    // if we fail to read the posts respond with an error page
    if (error) {
      console.log(error);
      const html = errorView("Error reading posts data");
      response.writeHead(500, { "content-type": "text/html" });
      response.end(html);
    }

    // if we have posts parse the string into JSON
    // then respond with the homepage with the posts
    const posts = JSON.parse(data);
    const html = homeView(posts);
    response.writeHead(200, { "content-type": "text/html" });
    response.end(html);
  });
}

module.exports = handleHome;
