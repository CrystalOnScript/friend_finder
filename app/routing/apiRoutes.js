const path = require('path');
var friends = [];
var friendCompare = require("../data/friends.js")
module.exports = app => {

  app.get("/api/friends", (req, res) => {
      return res.json(friendCompare);
  });

  app.post("/api/friends", function(req, res) {
    var friendPush = req.body;
    console.log(`params: ${req}`);
    console.log(`friendPush: ${JSON.stringify(friendPush)}`);
    var bestMatchTest = [];
    friends.push(friendPush);
    console.log(friends)

    function add(a, b) {
        return a + b;
    }

    var characterScore = [];
    var characterArray = [];
    for(var i=0; i<friendCompare.length; i++){
      var currentArrayName = friendCompare[i].friendName
      var currentArrayURL = friendCompare[i].photoURL
      var currentArray = friendCompare[i].questionArray
      var scoreTest = [];
      console.log(scoreTest)
      for(var j=0; j<currentArray.length; j++){
        var scoreish = currentArray[j] - friends[0].questionArray[j];
        scoreTest.push(Math.abs(scoreish))

      }
      var sum = scoreTest.reduce(add, 0);

      console.log(sum);
      characterScore.push(sum)
      characterArray.push({
        name: currentArrayName,
        url: currentArrayURL,
        sum: sum,
      })
      console.log(scoreTest)
    }
    Array.min = function( array ){
        return Math.min.apply( Math, array );
    };
    var minimum = Array.min(characterScore);
    console.log(minimum)

    for(var i=0; i<characterArray.length; i++){
      if(characterArray[i].sum === minimum){
        console.log(characterArray[i])
        bestMatch = characterArray[i]
        res.json(bestMatch);
      }

    }
    friendCompare.push(friendPush);
    console.log("friend compare "+friendCompare);

  });


};
