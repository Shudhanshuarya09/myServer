//Same code which is written in urlWebServer is going to write here using the expree.js frmaework


// const http = require("http");
const express = require("express");

const app = express();    //app is here works as a file handler 

app.get('/', (req, res) => {
  return res.send("Hello from the home page");
});

app.get('/about', (req, res) => {
  // return res.send("About page");
  return res.send("About page" + " hey!" + req.query.name + " You are" + req.query.age);  //you can just simply write query parameters like this,, that's the advantage of express.js framework 
});

app.listen(8000, () => console.log("server started"));     //due to express.js you can also write like this and makes the line of code reduced and also remove the http module from the top. 

// const myServer = http.createServer(app);
// myServer.listen(8000, () => console.log("server started"));