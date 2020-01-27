var express = require('express'),
app = express(),
bodyParser = require('body-parser'),
client = require('./client');
cors = require('cors');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send(okay)
})
app.post('/client', client)
var server = app.listen(5000, function () {
    console.log('Server is running..');
});
 


