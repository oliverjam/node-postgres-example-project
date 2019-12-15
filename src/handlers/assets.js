const fs = require("fs");
const path = require("path");
const errorView = require("../views/error");

const extensionType = {
  ".css": "text/css",
};

function handleAssets(request, response) {
  // look for file in directory above this
  const filePath = path.join(__dirname, "..", request.url);
  fs.readFile(filePath, (error, file) => {
    // not found respond with 404
    if (error) {
      const html = errorView("File not found");
      response.writeHead(404, { "content-type": "text/html" });
      response.end(html);
    }

    // grab the requested file's extension from the URL
    // e.g. "/assets/style.css" -> ".css"
    const extension = path.extname(request.url);

    // find correct content-type for the extension from object above
    // important to tell the browser what kind of file it's getting
    const type = extensionType[extension];
    response.writeHead(200, { "content-type": type });

    // respond with the file contents
    response.end(file);
  });
}

module.exports = handleAssets;
