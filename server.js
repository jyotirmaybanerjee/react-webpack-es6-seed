var application_root = __dirname,
http = require('http'),
express = require('express'),
path = require("path"),
bodyParser = require('body-parser'),
methodOverride = require('method-override'),
proxy = require('proxy-middleware'),
url = require('url'),
errorHandler = require('errorhandler');

var app = express();

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(express.static(path.join(application_root, 'build')));

app.use(errorHandler());
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!' + err.stack);
});
// app.use('/rest/Transformers', proxy(url.parse('http://localhost:9081/athena-ui/rest/Transformers')));
var port = process.env.PORT || 3000;
var router = express.Router();

app.get('/', function(req, res) {
	res.sendfile('./build/' + 'index.html');
});

/**************************************************** App level APIs start *******************************************************************/

app.get('/rest/App/commonProperties', function(req, res) {
	var appProperties = '{"packageInformation":"Analytics Platform<br>Revision version: 2.39.0-SNAPSHOT<br>Revision hash: athena-2.37.0-88-gdf10ce5<br>Revision date: 2015-09-08 19:09:00 -0700<br>Build date: 2015-09-09 02:13:28","nameSpace":"deval","forkingNamespace":"dev","DSL_DA":false,"userName":"jb999","aggregatePref":["min","distinctCount","entropy","perplexity","sum"],"aggregateList":["sum","count","multiply","avg","min","max","distinctCount","entropy","perplexity"],"lookupSourceArray":[{"query_source":"hive","driver":"org.apache.hive.jdbc.HiveDriver","url":"jdbc:hive2://athena05-d.apple.com:10000/default"},{"query_source":"existing","driver":"com.gbi.jdbc.TDDriver","url":"jdbc:gbiteradata://edwsit.corp.apple.com/LOGMECH=TD2,ENCRYPTDATA=ON"}],"DSLTools_Access":true,"userPath":"/tmp/athena/deval/data/git/jb999/dsl","offlineGraphPref":[],"allOfflineGraphs":[]}';

	res.send(appProperties);
});

/**************************************************** App level APIs end *******************************************************************/


/**************************************************** Workflow start *******************************************************************/


app.listen(port);
console.log('Server started on ' + port);
