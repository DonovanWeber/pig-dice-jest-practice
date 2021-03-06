
// Business Logic for Player ------

function Player(totalScore, roundScore, currentScore) {
  this.totalScore = 0;
  this.roundScore = 0;
  this.currentScore = 0;
}

let newPlayer1 = new Player(0, 0, 0);
let newPlayer2 = new Player(0, 0, 0);

Player.prototype.RollDice = function (max) {
  this.currentScore = Math.ceil(Math.random() * 6);
}

Player.prototype.AddRoundScore = function () {
  if (this.currentScore != 1) {
    this.roundScore += this.currentScore;
  } if (this.currentScore === 1) { 
    this.roundScore = 0;
  } else {

  return this.roundScore;
  }
}

Player.prototype.AddTotalScore = function () {
  if (this.roundScore != 0) {
    this.totalScore += this.roundScore; 
  } else {
  }
}

Player.prototype.BigRoller = function (player1TotalScore, player2TotalScore) {
  if (newPlayer1.totalScore >= 100) {
    return "player 1 is a Big Roller!";
  } else if (newPlayer2.totalScore >= 100) {
    return "player 2 is a Big Roller!";
  } else {
  }
}

// UI Logic ----------

$(document).ready(function () {
  $("#player1-roll").click(function (event) {
    event.preventDefault();
    newPlayer1.RollDice();
    if (newPlayer1.currentScore === 1) {
      $("#player2-roll").show();
      $("#player2-hold").show();
      $("#player1-roll").hide();
      $("#player1-hold").hide();
    };
    newPlayer1.AddRoundScore();
    $("#p1-current-score").html(newPlayer1.currentScore);
    $("#p1-round-score").html(newPlayer1.roundScore);
    console.log(newPlayer1);
  });
  
  $("#player2-roll").click(function(event) {
    event.preventDefault();
    newPlayer2.RollDice();
    if (newPlayer2.currentScore === 1) {
      $("#player1-roll").show();
      $("#player1-hold").show();
      $("#player2-roll").hide();
      $("#player2-hold").hide();
    };
    newPlayer2.AddRoundScore(); 
    $("#p2-current-score").html(newPlayer2.currentScore);
    $("#p2-round-score").html(newPlayer2.roundScore);
    console.log(newPlayer2);
  });

  $("#player1-hold").click(function (event) {
    event.preventDefault();
    $("#player2-roll").show();
    $("#player2-hold").show();
    $("#player1-roll").hide();
    $("#player1-hold").hide();
    newPlayer1.AddTotalScore();
    $("#p1-total-score").html(newPlayer1.totalScore);
    $("#big-roller").html(newPlayer1.BigRoller(newPlayer1.totalScore, newPlayer2.totalScore));
    newPlayer1.roundScore = 0
  }); 

  $("#player2-hold").click(function(event) {
    event.preventDefault();
    $("#player1-roll").show();
    $("#player1-hold").show();
    $("#player2-roll").hide();
    $("#player2-hold").hide();
    newPlayer2.AddTotalScore();
    $("#p2-total-score").html(newPlayer2.totalScore);
    $("#big-roller").html(newPlayer2.BigRoller(newPlayer2.totalScore, newPlayer1.totalScore));
    newPlayer2.roundScore = 0
  });
});
