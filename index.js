var Dictionary = require("japaneasy");
var dict = new Dictionary({ input: "japanese" });
const querystring = require("querystring");

input = querystring.escape(process.argv[2]);
dict(input).then(function(result) {
  console.log(result);
});
