/*
Name: Ricardo
Date Created: 9/13/2018
Most recent revision: 9/13/2018
*/


/*****************************************************************
    *()
    *parameters:
    *Function:
    *Return: none
*****************************************************************/

var NumberRolls = 0; // number of rolls taken before the money ran out
var MaxMoney = 0; //  the max amount of money held by the player
var MaxRolls = 0; // how many rolls were taken at the point when the user held max money
var GameMoney = 0; // the amount of money the user has currently

/*****************************************************************
    *ValidEntry()
    *parameters: StartingBet
    *Function: This funtion is meant to check if the value entered
               by the user is more than 0. If not it promts the user
               to enter a valid number. Once the valid number is entered
               the prgram starts.
    *Return: none
*****************************************************************/
function ValidEntry(StartingBet){

  if (StartingBet <= 0){
    alert("Starting bet must be greater than $0.00.");
        document.forms["StartingBetAmount"]["StartingBet"]
           .parentElement.className = "form-group has-error";
  }

  else {
    GameMoney = StartingBet;
    BeginGame(GameMoney);
  }
}



/*****************************************************************
    *RollDice()
    *parameters: none
    *Function: this function is called to roll a pair of dice and add the
               results together.
    *Return: the summation of the two dice
*****************************************************************/
function RollDice() {
  var Dice1 = Math.floor(Math.random() * 6) + 1; // rolls the frist dice
  var Dice2 = Math.floor(Math.random() * 6) + 1; // rolls the second dice
  var Sum = Dice1+Dice2; // adds the results of Dice1 and Dice2

  return Sum
}


/*****************************************************************
    *BeginGame()
    *parameters: GameMoney
    *Function:
    *Return: none
*****************************************************************/
function BeginGame(GameMoney){




}



function Results(){
  document.getElementById("results").style.display = "block";
  document.getElementById("PlayButton").innerText = "Play Again";
}
