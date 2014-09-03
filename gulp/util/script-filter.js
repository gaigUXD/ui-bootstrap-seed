var path = require("path");

// Filter out non .js files
module.exports = function(name) {
  return /(\.(js)$)/i.test(path.extname(name));
};