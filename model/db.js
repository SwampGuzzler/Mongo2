var mongoose = require('mongoose');

var hikeSchema = new mongoose.Schema({
	type: String,
	geometry: {
    type: mongoose.Schema.Types.Mixed,
		//coordinates: mongoose.Schema.Types.Mixed
    coordinates: { type: mongoose.Schema.Types.Mixed, index: true}
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

mongoose.set('debug', true);
mongoose.model('Hike', hikeSchema, 'hikes6');
mongoose.connect( 'mongodb://localhost/test');

/*
mongoose.connect( 'mongodb://localhost/test', function (err, db) {
  if(err) return console.dir(err)
  //var collection = db.collection('hikes6');

  hikes6.collection.ensureIndex( { geometry : "2dsphere" }, function(err, result) {
    if(err) return console.dir(err);
  });
});*/


/*
Db.connect("mongodb://localhost:27017/geodb", function(err, db) {
  if(err) return console.dir(err)
  var collection = db.collection('places');

  collection.ensureIndex({loc: "2d"}, {min: -500, max: 500, w:1}, function(err, result) {
    if(err) return console.dir(err);

    collection.insert(document, {w:1}, function(err, result) {
      if(err) return console.dir(err)
    });
  });
}); */

// Replacing Mongo Code w/ this
//var mongoose = require('mongoose'),
//db = mongoose.createConnection('localhost', 'test');
//db.on('error', console.error.bind(console, 'connection error:'));
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