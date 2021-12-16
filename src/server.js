const http = require('http');
const app = require("./app");

app.listen(8080, '0.0.0.0', function () {
  console.log("Resolver app listening on port 8080...");
});
