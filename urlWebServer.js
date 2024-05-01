const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Received\n`
  const myUrl = url.parse(req.url);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
    case "/":
      res.end("HomePage");
      break;
      case "/about":
        res.end("I am Shudhasnhu Arya");
        break;
        default :
        res.end("404 Not found");
       
    }

  });
});

myServer.listen(8000, () => console.log("Server started"));