const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/gamesDB");



const Game = mongoose.model('Game', {
  name : String , os : String , cds: Number
});

const Owner = mongoose.model("Owner",{
  name: String , ph: Number
});

// const game = new Game({ name: "GTA V" ,os : "Win7 and above", cds: 5 });
// const game2 = new Game({
//   name: "Watch Dogs" , os : "Win7 and above" , cds: 4
// })

// game.save().then(() => console.log('Successfully Added'));
// game2.save().then(() => console.log("Successfully Added"));

const farcry = new Game({
  name: "Farcry" , os : "XP and above" , cds: 2
});

const GTA = new Owner({
  name: "Wahhab" , ph: 9876543210
});

const WD = new Owner({
  name: "Rock" , ph: 9874125630
});

farcry.save();
GTA.save();
WD.save();
console.log('Successfully Added');
