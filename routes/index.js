/*
 * GET home page.
 */

var hikedata = require('../model/hikes');

exports.index = function(req, res){
 var strGroup = "Feature";
 hikedata.hikelist(strGroup,function(err,hikelist){
  res.render('index', {
   title: 'Test web page on node.js using Express and Mongoose',
   pagetitle: 'Hello there',
   //group: strGroup,
   hikes: hikelist
  });
 });
};
