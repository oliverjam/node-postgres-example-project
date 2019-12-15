const qs = require("querystring");
const fs = require("fs");

function handleSubmit(request, response) {
  let data = "";
  request.on("data", chunk => (data += chunk));
  request.on("end", error => {
    if (error) {
      response.statusCode = 500;
      response.end(`<h1>Oops</h1>`);
    }
    const newPost = qs.parse(data);
    fs.readFile(
      __dirname + "/../posts.json",
      "utf-8",
      (readError, postsData) => {
        if (readError) {
          console.log(readError);
          response.statusCode = 500;
          response.end(`<h1>Oops</h1>`);
        }
        const posts = JSON.parse(postsData);
        posts.push(newPost);
        fs.writeFile(
          __dirname + "/../posts.json",
          JSON.stringify(posts),
          writeError => {
            if (writeError) {
              console.log(writeError);
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
