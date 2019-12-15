const qs = require("querystring");
const path = require("path");
const fs = require("fs");
const errorView = require("../views/error");

function handleSubmit(request, response) {
  // read the POST body (it doesn't come all at once)
  let body = "";

  // whenever we get some data add it to the string
  request.on("data", chunk => (body += chunk));

  // when we have all the data run this function
  request.on("end", submitError => {
    // respond with an error if something went wrong with the form submission
    if (submitError) {
      console.log(submitError);
      const html = errorView("Error receiving form data");
      response.writeHead(500, { "content-type": "text/htm;" });
      response.end(html);
    }

    // turn the form submitted data into an object
    const newPost = qs.parse(body);

    // read the file where posts are stored
    const postsPath = path.join(__dirname, "../posts.json");
    fs.readFile(postsPath, "utf-8", (readError, file) => {
      // if we fail to read the file respond with an error
      if (readError) {
        console.log(readError);
        const html = errorView("Error reading posts data");
        response.writeHead(500, { "content-type": "text/htm;" });
        response.end(html);
      }

      // turn the file contents (string) into JSON (array)
      const posts = JSON.parse(file);

      // put the newly submitted post into the array
      posts.push(newPost);

      // overwrite the old posts file with the updated posts
      fs.writeFile(postsPath, JSON.stringify(posts), writeError => {
        // if we fail to save the posts respond with an error
        if (writeError) {
          console.log(writeError);
          const html = errorView("Error saving post data");
          response.writeHead(500, { "content-type": "text/html" });
          response.end(html);
        }

        // if everything was successful redirect to homepage
        response.writeHead(302, { Location: "/" });
        response.end();
      });
    });
  });
}

module.exports = handleSubmit;
