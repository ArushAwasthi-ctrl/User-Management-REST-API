const fs = require("fs");

function logreqRes(filename) {
  return (req, res, next) => {
    fs.appendFile(
      filename,
      `\n${Date.now()} The method used is ${req.method} and the ip is ${
        req.ip
      } and the path is ${req.path}`,
      (error, data) => {
        if (error) {
          console.log(error);
        } else {
          console.log(
            "Middleware checkups complete now heading towards routes"
          );
        }
      }
    );
    next(); 
  };
}
module.exports = { logreqRes };
