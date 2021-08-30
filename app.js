// mongoose v5.13.8 needed v6 not working
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/gamesDB",{ useNewUrlParser: true ,useUnifiedTopology: true});

const gameSchema = new mongoose.Schema({
    name: {
      type:String,
      required:[true,"Name important"]
    },
    os: String,
    cds: Number
  });

const Game = mongoose.model('Game', gameSchema);

const ownerSchema = new mongoose.Schema({
  name: String,
  ph: Number,
  favGame: gameSchema
});

const Owner = mongoose.model("Owner", ownerSchema);

// const angrybird = new Game({
//   name:"Angry Birds",
//   os: "95+",
//   cds: 1
// });
//
// angrybird.save();
//
// const John = new Owner({
//   name:"John",
//   ph: 9874563214,
//   favGame: angrybird
// });
//
// John.save();

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
const farcry = new Game({
  name: "Farcry",
  os: "XP and above",
  cds: 2
});
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

//Save item to DataBase

// game.save();
// game2.save();
// farcry.save();
// GTA.save();
// WD.save();
// console.log('Successfully Added');

//InsertMany items Manually

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

//Direct insert array

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

//UpdateOne item in Database

// Game.updateOne({_id:"612c535fc6399f49d34613c1"},{ name : "GTA VI" } ,function(err){
//   if(err){
//     console.log('Failed');
//   }else{
//     console.log('Updated');
//   };
// });

//DeleteOne item in DataBase

// Game.deleteOne({name: "GTA VI"},function(err){
//   if (err) {
//     console.log('Failed');
//   } else {
//     console.log('Deleted');
//   };
// });

//Select or Find item specifically in DataBase Collection(games)

// Game.find(function(err , games)
// {
//   if(err)
//   {
//     console.log(err);
//   }
//   else
//   {
//     mongoose.connection.close();
//     games.forEach(function(game){
//       console.log(game.name);
//     });
//   };
// });

// Owner.updateOne({name:"Wahhab"},{favGame:farcry},function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('Success');
//   };
// });

//Select or Find Full Data in Collection(games)

Game.find(function(err,games){
  if (err) {
    console.log(err);
  } else {
    console.log(games);
  };
});

Owner.find(function(err,owners){
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    console.log(owners);
  };
});
