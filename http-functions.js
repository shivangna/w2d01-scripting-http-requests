
var https = require('https');

module.exports = function getHTML (options, callback) {
  https.get(options, function (response) {
    response.setEncoding('utf8');
    var dataString = '';
  response.on('data', function (data) {
    dataString = (dataString + data);
    callback(dataString);
  });
    response.on('end', function() {
    console.log('Response stream complete.');
  });
  });
};


