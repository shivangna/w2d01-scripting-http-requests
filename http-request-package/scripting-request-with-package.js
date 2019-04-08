// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
        throw error
       })
       .on('response', function(response) {
        console.log('Response Status Message: ', response.statusMessage)
       })
       .on('response', function(response) {
        console.log('content type: ', response.headers['content-type'])
       })
       .pipe(fs.createWriteStream('./future.jpg'), function(response) {
        console.log('Downloading image...')
      })
       .on('finish', function(response) {
        console.log('Download Complete.')
       })














