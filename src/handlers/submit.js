const qs = require("querystring");
const fs = require("fs");
const errorView = require("../views/error");

function handleSubmit(request, response) {
  let data = "";
  request.on("data", chunk => (data += chunk));
  request.on("end", submitError => {
    if (submitError) {
      console.log(submitError);
      const html = errorView("Error receiving form data");
      response.writeHead(500, { "content-type": "text/htm;" });
      response.end(html);
    }
    const newPost = qs.parse(data);
    fs.readFile(
      __dirname + "/../posts.json",
      "utf-8",
      (readError, postsData) => {
        if (readError) {
          console.log(readError);
          const html = errorView("Error reading posts data");
          response.writeHead(500, { "content-type": "text/htm;" });
          response.end(html);
        }
        const posts = JSON.parse(postsData);
        posts.push(newPost);
        fs.writeFile(
          __dirname + "/../posts.json",
          JSON.stringify(posts),
          writeError => {
            if (writeError) {
              console.log(writeError);
              const html = errorView("Error saving post data");
              response.writeHead(500, { "content-type": "text/htm;" });
              response.end(html);
            }
            response.writeHead(302, { Location: "/" });
            response.end();
          }
        );
      }
    );
  });
}

module.exports = handleSubmit;
