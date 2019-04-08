
var https = require('https');



function getAndPrintHTML (options) {


  https.get(options, function (response) {
    response.setEncoding('utf8');
    var pi = '';
  response.on('data', function (data) {
    pi = (pi + data);
    console.log(pi)
  });
    response.on('end', function() {
    console.log('Response stream complete.');
  });
});
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};



console.log(getAndPrintHTML(requestOptions));