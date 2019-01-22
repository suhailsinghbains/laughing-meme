
const express = require('express')
const app = express()
const port = 8080
// var firebase = require("firebase");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var Data;
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    function GetData() {
        var url = "https://reqres.in/api/users?page=2";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
            Data = xhr.responseText;
            res.render('./index', {
                Data: JSON.parse(Data).data
            });
            console.log(JSON.parse(Data).data);
        }
        xhr.send();
    }
    GetData();
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))