var mongoose = require('mongoose');

exports.hikelist = function hikelist(hname,callback){
 var Hike = mongoose.model( 'Hike' );
 Hike.find({type:hname}, function (err, hikes) {
  if(err){
   console.log(err);
  }else{
   console.log("Here da Hikes: ");
   console.log(hikes);
   callback("",hikes);
  }
 })// end Hike.find
}// end exports.hikelist
