/*
Name: Ricardo Morales
Date Created: 9/13/2018
Most recent revision: 9/13/2018
*/

/*****************************************************************
    *ValidEntry()
    *parameters: StartingBet
    *Function: This funtion is meant to check if the value entered
               by the user is more than 0. If not it promts the user
               to enter a valid number. Once the valid number is entered
               the prgram starts.
    *Return: none
*****************************************************************/
function ValidEntry(){

  // get the starting bet from the user
  var StartingBet = document.forms["LuckySeven"]["StartingBet"].value;

  // if statement determines if the value entered is not valid
  if (StartingBet <= 0 || isNaN(StartingBet) || StartingBet == "" ){
    // alert user that the value entered is not valid
    alert("Starting bet must be greater than $0.00.");
        document.forms["LuckySeven"]["StartingBet"]
           .parentElement.className = "form-group has-error";
  }

  // else the value is valid and the game begins by using starting bet
  else{
    BeginGame(StartingBet);
  }
  //return false to show the table results
  return false;
}



/*****************************************************************
    *RollDice()
    *parameters: none
    *Function: this function is called to roll a pair of dice and add the
               results together.
    *Return: the summation of the two dice
*****************************************************************/
function RollDice() {
  // rolls the frist dice
  var Dice1 = Math.floor(Math.random() * 6) + 1;
  // rolls the second dice
  var Dice2 = Math.floor(Math.random() * 6) + 1;
  // adds the results of Dice1 and Dice2
  var Sum = Dice1+Dice2;

  // returns the result of the summation
  return Sum;
}


/*****************************************************************
    *Results()
    *parameters: NumberRolls,MaxMoney,MaxRolls,StartedBet
    *Function: this function will display the results table and assign value to
               the specified identifiers. It will also change the play button to
               play again incase the player wants to play again.
    *Return: none
*****************************************************************/
function Results(NumberRolls,MaxMoney,MaxRolls,StartedBet){

  // sets the folliwng values to there respected id
  document.getElementById("results").style.display = "block";
  document.getElementById("PlayButton").innerText = "Play Again";
  document.getElementById("StartedBet").innerText =StartedBet;
  document.getElementById("NumberRolls").innerText = NumberRolls;
  document.getElementById("MaxMoney").innerText = MaxMoney;
  document.getElementById("MaxRolls").innerText = MaxRolls;

}

/*****************************************************************
    *BeginGame()
    *parameters: StartingBet
    *Function: this function will do all the main functionality of the game:
               - determine if the player still has money if not call results
               - call the roll dice function to get the summation
               - determine if the sum is 7, if so player gets money if not it
                 looses money
               - keep track of the number of rolls and the max money and rolls
    *Return: none
*****************************************************************/
function BeginGame(StartingBet){

  var NumberRolls = 0; // number of rolls taken before the money ran out
  var MaxMoney = 0; //  the max amount of money held by the player
  var MaxRolls = 0; // how many rolls were taken at the point when the user held max money
  var GameMoney = StartingBet; // the amount of money the user has currently
  var StartedBet = StartingBet; // keep record of the starting bet
  var SumDice; // result of the sum of the rolled dice
  var LuckyNumber = 7; // Lucky Number can be changed if needed

  // while loop will continue until the user goes broke
  while (GameMoney > 0){
    // call the roll dice function to get the sum of the two dice
    SumDice = RollDice();
    // increase the value of times the dice have been rolled
    NumberRolls++;

    // if statement checks if the sum of the dice equals the lucky number
    if (SumDice == LuckyNumber){
      // if the sum equals the player recieves $4
      GameMoney = GameMoney + 4;
      //checks if the current money of the user is greater than the last max
      if (GameMoney>MaxMoney){
        // make max money equal to game money if statement is true
        MaxMoney = GameMoney;
        // make max rolls equal to current rolls if statement is true
        MaxRolls = NumberRolls;
      }
    }

    else {
      // else the player looses $1
      GameMoney = GameMoney - 1;
    }
  }
  // call the results function to display the results once the game is over
  Results(NumberRolls,MaxMoney,MaxRolls,StartedBet);
}
