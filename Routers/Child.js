const { response } = require("express");
const express = require("express");
const routers = express.Router();
routers
  .route("/Children")
  .get((request , response) => {
    response.json("Show Children Get Request");
  })
  .post((request , response) => {
    response.json("Add Child Post Request");
  })
  .patch((request , response) => {
    response.json("Edit Child Patch Request ");
  })
  .delete((request , response) => {
    response.json("Remove Child Delete Request ");
  });
module.exports = routers;
