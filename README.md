# Node Example Project

This is an example project built with vanilla Node and no external libraries. It's designed to demonstrate how to create an HTTP server with basic routing, form submission and templating.

## Running locally

1. Clone this repo
1. `cd` into the directory and `npm install`
1. `npm run dev` to start the dev server

## Data persistence

The server has very rudimentary data persistence by writing to a JSON file. If the file is missing when the server starts it will create it. Any posts submitted via the form on the homepage will be added to this JSON. Don't use this in production!
