const qs = require("querystring");

function handleSubmit(request, response) {
  let data = "";
  request.on("data", chunk => (data += chunk));
  request.on("end", error => {
    if (error) {
      response.statusCode = 500;
      response.end(`<h1>Oops</h1>`);
    }
    const newPost = qs.parse(data);
    response.statusCode = 200;
    response.end(`<pre>${JSON.stringify(newPost, null, 2)}</pre>`);
  });
}

module.exports = handleSubmit;
