const fs = require("fs");
const homeView = require("../views/home");

function handleHome(request, response) {
  fs.readFile(__dirname + "/../posts.json", "utf-8", (error, data) => {
    if (error) {
      console.log(error);
      response.statusCode = 500;
      response.end(`<h1>Oops</h1>`);
    }
    const posts = JSON.parse(data);
    response.statusCode = 200;
    const html = homeView(posts);
    response.end(html);
  });
}

module.exports = handleHome;
