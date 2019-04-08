// while https is built-in to Node, it is a module, so it must be required
var https = require('https');





// Your first function getAndPrintHTMLChunks will utilize the https library to GET a given URL.
function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
  response.on('data', function (data) {
    console.log(data + '\n');
  });
    response.on('end', function() {
    console.log('Response stream complete.');
  });
});
}


console.log(getAndPrintHTMLChunks())



// This function should console.log each chunk of data as it is received, concatenated with a newline character ('\n') so you can visualize each chunk.
// Remember in this and each subsequent Step - you will always need to invoke (call) the function you wrote.