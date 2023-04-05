const express = require("express");
const routers = express.Router();
routers
  .route("/Teacher")
  .get((request, response) => {
    response.json("Show Teachers Get Request");
  })
  .post((request , response) => {
    response.json("Add Teacher Post Request");
  })
  .patch((request , response) => {
    response.json("Edit Teacher Patch Request ");
  })
  .delete((request, response) => {
    response.json("Remove Teacher Delete Request ");
  });
module.exports = routers;
