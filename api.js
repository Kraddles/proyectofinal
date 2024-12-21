const request = require('request');


var client_id = '5abc71eb4b364d77abd4d7e1af03b9ae';
var client_secret = '1bb9ffd94fe0416991ee4dd0dce4447a';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
  }
});