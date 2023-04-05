const { response } = require("express");
const morgan = require('morgan');
const express = require("express");
const { request } = require("http");
const server = express();
const Child = require("./Routers/Class");
const Class = require("./Routers/Child");
const Teacher = require("./Routers/Teacher");
server.listen(8080, () => {
});
//First Middleware   --> logging
server.use((request,response,next)=>{
    console.log(request.url,request.method);
    next();
});
server.use(morgan('tiny'));
server.use(Child);
server.use(Class);
server.use(Teacher);

server.use((request, response, next) => {
  response.status(404).json("Page not Found");
  next()
});
server.use((error, request, response, next) => {
  response
    .status(500)
    .json({ Message: "An Error 500 Acuured " + error.Message });
});
