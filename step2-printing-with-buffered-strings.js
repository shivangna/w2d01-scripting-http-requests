
var https = require('https');



function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
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




console.log(getAndPrintHTML())