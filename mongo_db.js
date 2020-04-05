
var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost27017/mydb";
MongoClient.connect(url, function(err, db){
    if(err)throw err;
    console.log("Database created!");
    db.close()
});

