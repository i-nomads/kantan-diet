var express = require('express'),
    app = express();

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.end('In construction!');
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
