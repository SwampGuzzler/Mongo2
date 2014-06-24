/*
 * GET home page.
 */

var hikedata = require('../model/hikes');
var mapDisplay = require('../model/map');

exports.index = function(req, res){
 var strGroup = 'Feature';
 hikedata.hikelist(strGroup,function(err,hikelist){
   res.render('index', {
   	title: 'NEW TITLE NOW SON',
   	hikes: hikelist
   });
  /*res.render('index', {
   title: 'Test web page on node.js using Express and Mongoose',
   pagetitle: 'Hello there',
   hikes: hikelist
  });*/
 });/*
 mapDisplay.mapLogic(strGroup,function(err,mapLogic){
  res.render('index', {
  	mapz: mapLogic
  });
 });*/
};
