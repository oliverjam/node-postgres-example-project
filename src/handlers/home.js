const fs = require("fs");
const homeView = require("../views/home");
const errorView = require("../views/error");

function handleHome(request, response) {
  fs.readFile(__dirname + "/../posts.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
      const html = errorView("Error reading posts data");
      response.writeHead(500, { "content-type": "text/html" });
      response.end(html);
    }
    const posts = JSON.parse(data);
    const html = homeView(posts);
    response.writeHead(200, { "content-type": "text/html" });
    response.end(html);
  });
}

module.exports = handleHome;
