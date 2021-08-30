// mongoose v5.13.8 needed v6 not working 
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/gamesDB",{ useNewUrlParser: true ,useUnifiedTopology: true});

const Game = mongoose.model('Game', {
  name: String,
  os: String,
  cds: Number
});

const Owner = mongoose.model("Owner", {
  name: String,
  ph: Number
});

// const game = new Game({
//   name: "GTA V",
//   os: "Win7 and above",
//   cds: 5
// });
// const game2 = new Game({
//   name: "Watch Dogs",
//   os: "Win7 and above",
//   cds: 4
// });
//
//
// const farcry = new Game({
//   name: "Farcry",
//   os: "XP and above",
//   cds: 2
// });
//
// const GTA = new Owner({
//   name: "Wahhab",
//   ph: 9876543210
// });
//
// const WD = new Owner({
//   name: "Rock",
//   ph: 9874125630
// });
//
// game.save();
// game2.save();
// farcry.save();
// GTA.save();
// WD.save();
// console.log('Successfully Added');
// const FF = new Game({
//   name: "Free Fire",os:"Android or iOS"
// });
// const PUBG = new Game({
//   name:"Player Unknown's Battle Ground",os:"Android or iOS or Windows" ,cds:2
// });

// Game.insertMany([FF , PUBG ],function(err){
//   if(err){
//     console.log('Failed');
//   }else{
//     console.log('Added');
//   };
// });

// const bulkGames =[
//   {name:"Vice City",os:"98+",cds:1},{name:"Death Note",os:"11+",cds:14}
// ];
//
// Game.insertMany(bulkGames,function(err){
//   if(err){
//     console.log('Failed');
//
//   }else{
//     console.log('Added');
//   };
// });

Game.find(function(err , docs ){
  if(err){
    console.log(err);
  }else{
    console.log(docs);
  };
});
