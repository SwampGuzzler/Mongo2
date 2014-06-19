var mongoose = require('mongoose');

var hikeSchema = new mongoose.Schema({
	type: String,
	geometry: {
		type: String,
		coordinates: Array
	},
	properties: {
		rating: String,
		length: String,
		kml: String,
		features: String,
		name: String,
		lat: Number,
		lng: Number,
		elevGain: Number,
		id: String,
		elevMax: Number
	}
});
mongoose.model('Hike', hikeSchema);
mongoose.connect( 'mongodb://localhost/test');

// Replacing Mongo Code w/ this
//var mongoose = require('mongoose'),
db = mongoose.createConnection('localhost', 'test');
db.on('error', console.error.bind(console, 'connection error:'));
//var Hike = mongoose.model('Hike', hikeSchema);

/*
Hike.find({'GroupName':hname}, function (err, hikes) {
 if(err){
  onErr(err,callback);
 }else{
  mongoose.connection.close();
  console.log(hikes);
  callback("",hikes);
 }
});// end Team.find*/


// Start of 'Mongo w/o Mongoose' Code
/*
exports.teamlist = function(gname,callback){
 db.open(function(err, db) {
  if(!err) {
   db.collection('teams', function(err, collection) {
    if(!err){
     collection.find({'GroupName':gname}).toArray(function(err, docs) {
      if(!err){
       db.close();
       var intCount = docs.length;
       if(intCount > 0){
        var strJson = "";
        for(var i=0; i<intCount;){
         strJson += '{"country":"' + docs[i].country + '"}'
         i=i+1;
         if(i<intCount){strJson+=',';}
        }
        strJson = '{"GroupName":"'+gname+'","count":'+intCount+',"teams":[' + strJson + "]}";
        console.log(strJson);;
        callback("",JSON.parse(strJson));
       }
      }
      else{onErr(err,callback);}
     });//end collection.find
    }
    else{onErr(err,callback);}
   });//end db.collection
  }
  else{onErr(err,callback);}
 });// end db.open
};
*/