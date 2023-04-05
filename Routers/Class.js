const { response } = require("express");
const express = require("express");
const routers = express.Router();
routers
  .route("/Classes")
  .get((request , response) => {
    response.json("Show Classses Get Request");
  })
  .post((request , response) => {
    response.json("Add Class Post Request");
  })
  .patch((request , response) => {
    response.json("Edit Class Patch Request ");
  })
  .delete((request , response) => {
    response.json("Remove Class Delete Request ");
  });
module.exports = routers;
