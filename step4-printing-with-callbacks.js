
var https = require('https');



function getHTML (options, callback) {
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
}

function printHTML (html) {
  console.log(html);
}




var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

console.log(getHTML(requestOptions,printHTML));