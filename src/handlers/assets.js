const fs = require("fs");
const errorView = require("../views/error");

const extensionType = {
  css: "text/css",
};

function handleAssets(request, response) {
  // look for file in directory above this
  fs.readFile(__dirname + "/.." + request.url, (error, file) => {
    // not found respond with 404
    if (error) {
      const html = errorView("File not found");
      response.writeHead(404, { "content-type": "text/html" });
      response.end(html);
    }

    // grab the request file extension from the URL
    // e.g. "/assets/style.css" -> ["/assets/style", "css"]
    const extension = request.url.split(".")[1];

    // find correct content-type for the extension from object above
    // important to tell the browser what kind of file it's getting
    const type = extensionType[extension];
    response.writeHead(200, { "content-type": type });

    // respond with the file contents
    response.end(file);
  });
}

module.exports = handleAssets;
