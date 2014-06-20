var mongoose = require('mongoose');

exports.hikelist = function hikelist(hname,callback){
 var Hike = mongoose.model( 'Hike' );
 //Hike.find({}, function (err, hikes) {
 //Hike.find({'type':hname}, function (err, hikes) {
 Hike.find({"properties.name" : 'Wenatchee Mountain'}, function (err, hikes) {
  if(err){
   console.log(err);
  }else{
   console.log("Here da Hikes: ");
   console.dir(hikes);
   callback("",hikes);
  }
 })// end Hike.find
}// end exports.hikelist
