function pageTemplate(body) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Node project</title>
        <link rel="stylesheet" href="/assets/styles.css">
      </head>
      <body>
        ${body}
      </body>
    </html>
  `;
}

module.exports = pageTemplate;
